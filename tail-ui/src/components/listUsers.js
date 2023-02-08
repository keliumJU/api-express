import Erin from '../erin-lindford.jpg'

function ListUsers() {
  return (
    <div>
      <ul className="p-6 divide-y divide-slate-200">
        <li className="flex py-4 first:pt-0 last:pb-0">
          <img className="h-10 w-10 rounded-full" src={Erin} alt=""/>
          <div className="ml-3 overflow-hidden">
            <p class="text-sm font-medium text-slate-900">ramona</p>
            <p class="text-sm text-slate-500 truncate">ramona@gmail.com</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ListUsers
