import { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar.tsx'
import cls from './mainPage.module.scss'

const MainPage = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  return (
    <div className={cls.content}>
      <Sidebar
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
    </div>
  )
}

export default MainPage