import cls from './loading.module.scss'

const Loading = () => {
  return (
    <div className={cls.loading}>
      <svg className={cls.spinner} width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle className={cls.path} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
    </div>
  )
}

export default Loading