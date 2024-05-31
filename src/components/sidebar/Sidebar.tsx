import cls from './sidebar.module.scss'

type Props = {
  selectedTags: string[],
  allTags: string[],
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>,
}

const Sidebar = ({ setSelectedTags, allTags, selectedTags }: Props) => {
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
        allTags.map(tag => (
          <button
            key={tag}
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