import cls from './courseCard.module.scss'
import { CourseI } from '../../types.ts'

type Props = {
  course: CourseI
}

const CourseCard = ({ course }: Props) => {
  return (
    <div className={cls.card}>
      <div className={cls.imageBox} style={{ backgroundColor: course.bgColor }}>
        <img src={course.image} alt={course.name} />
      </div>
      <p>{course.name}</p>
    </div>
  )
}

export default CourseCard