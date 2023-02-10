function MenuButton({title}){
  return (
    <button className="flex flex-row w-full">
      <div className="">{title}</div>
      <div className="ml-auto">Icon</div>
    </button>
  )
}

export default MenuButton
