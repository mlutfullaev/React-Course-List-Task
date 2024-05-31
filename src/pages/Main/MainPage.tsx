import { useState } from 'react'
import Sidebar from '@/components/sidebar/Sidebar.tsx'
import cls from './mainPage.module.scss'
import CourseList from '@/components/courseList/CourseList.tsx'

const MainPage = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [allTags, setAllTags] = useState<string[]>([])

  return (
    <div className={cls.content}>
      <Sidebar
        allTags={allTags}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <CourseList
        setAllTags={setAllTags}
        selectedTags={selectedTags}
      />
    </div>
  )
}

export default MainPage