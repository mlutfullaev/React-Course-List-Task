import cls from './coursesList.module.scss'
import CourseCard from '../courseCard/CourseCard.tsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CourseI } from '../../types.ts'
import Loading from '../loading/Loading.tsx'
import Error from '../error/Error.tsx'
import Empty from '../empty/Empty.tsx'

type Props = {
  selectedTags: string[],
  setAllTags: React.Dispatch<React.SetStateAction<string[]>>
}

const CourseList = ({ selectedTags, setAllTags }: Props) => {
  const [loadingCourses, setLoadingCourses] = useState(true)
  const [error, setError] = useState(false)
  const [allCourses, setAllCourses] = useState<CourseI[]>([])
  const [filteredCourses, setFilteredCourses] = useState<CourseI[]>([])
  
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_URL}/docs/courses.json`)
      .then(res => {
        setLoadingCourses(false)
        setAllCourses(res.data)
      })
      .catch(() => {
        setLoadingCourses(false)
        setError(true)
      })
  }, [])

  useEffect(() => {
    setAllTags(() => {
      const allTags: string[] = allCourses.flatMap(course => course.tags)
      return [...new Set(allTags)]
    })
  }, [allCourses, setAllTags])

  useEffect(() => {
    if (!selectedTags.length) {
      return setFilteredCourses(allCourses)
    }
    setFilteredCourses(allCourses.filter(course => course.tags.some(tag => selectedTags.includes(tag))))
  }, [allCourses, selectedTags])
  
  if (loadingCourses) return <Loading />
  
  if (error) return <Error />

  if (!filteredCourses.length) return <Empty />
  
  return (
    <div className={cls.coursesList}>
      {
        filteredCourses.map(course => (
          <CourseCard
            course={course}
            key={course.id}
          />
        ))
      }
    </div>
  )
}

export default CourseList