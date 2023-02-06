import './App.css';
import ChitChat from './components/chitChat'
import UserProfile from './components/userProfile'

function App() {
  return (
    <div>
      <h1 className="text-slate-400 font-bold underline">
        Hello world!
      </h1>
      <ChitChat/>
      <UserProfile/>
    </div>
  );
}

export default App;
