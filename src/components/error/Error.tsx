import cls from './error.module.scss'
import errorIcon from '@/assets/img/error.svg'

const Error = () => {
  return (
    <div className={cls.content}>
      <p>Что-то пошло не так!</p>
      <img src={errorIcon} alt="error"/>
    </div>
  )
}

export default Error