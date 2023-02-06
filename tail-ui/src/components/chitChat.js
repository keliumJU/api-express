import logo from '../logo.svg'

function ChitChat() {
  return (
    <div>
      <div className="p-6 max-w-sm mx-auto bg-yellow-300 rounded-xl shadow-xl flex items-center space-x-4">
        <div>
          <img className="h-12 w-12" src={logo} alt="ChitChat logo"/>
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </div>
  )
}

export default ChitChat;
