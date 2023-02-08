import './App.css';
import ChitChat from './components/chitChat'
import UserProfile from './components/userProfile'
import ButtonHover from './components/buttonHover'
import ListUsers from './components/listUsers';
import CardResponsive from './components/CardResponsive';

function App() {
  return (
    <div>
      <h1 className="text-slate-400 font-bold underline">
        Hello world!
      </h1>
      <ChitChat/>
      <UserProfile/>
      <ButtonHover/>
      <ListUsers />
      <CardResponsive />
    </div>
  );
}

export default App;
