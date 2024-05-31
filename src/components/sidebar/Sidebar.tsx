import cls from './sidebar.module.scss'
import { TAGS } from '../../data.ts'

type Props = {
  selectedTags: string[],
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>,
}

const Sidebar = ({ setSelectedTags, selectedTags }: Props) => {
  const onToggleTag = (currentTag: string) => {
    setSelectedTags(prevTags => {
      if (prevTags.includes(currentTag)) {
        return prevTags.filter((tag) => tag !== currentTag)
      } else {
        return [...prevTags, currentTag]
      }
    })
  }
  
  const onAllTags = () => {
    setSelectedTags([])
  }
  
  return (
    <div className={cls.sidebar}>
      <button
        className={!selectedTags.length ? cls.selected : ''}
        onClick={onAllTags}
      >
        Все темы
      </button>
      {
        TAGS.map(tag => (
          <button
            className={selectedTags.includes(tag) ? cls.selected : ''}
            onClick={() => onToggleTag(tag)}
          >
            {tag}
          </button>
        ))
      }
    </div>
  )
}

export default Sidebar