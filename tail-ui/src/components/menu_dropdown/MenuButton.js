function MenuButton({title, icon}){
  return (
    <button className="flex flex-row w-full text-neutral-500 p-4">
      <div className="text-xl font-medium">{title}</div>
      <div className="ml-auto"><img src={icon} className="w-5 h-5" alt="caret-down-icon" /></div>
    </button>
  )
}

export default MenuButton
