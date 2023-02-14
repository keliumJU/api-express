function MenuButton({title, icon}){
  return (
    <button className="flex flex-row w-full text-neutral-500">
      <div className="">{title}</div>
      <div className="ml-auto pr-2"><img src={icon} alt="caret-down-icon" /></div>
    </button>
  )
}

export default MenuButton
