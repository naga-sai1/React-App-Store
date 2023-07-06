import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickButton = () => {
    updateTabId(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'
  return (
    <li className="tab-item-container">
      <button className={tabBtnClassName} type="button" onClick={onClickButton}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
