import cls from '@/components/error/error.module.scss'
import emptyIcon from '@/assets/img/empty.svg'

const Empty = () => {
  return (
    <div className={cls.content}>
      <p>Ничего не найдено</p>
      <img src={emptyIcon} alt="empty"/>
    </div>
  )
}

export default Empty