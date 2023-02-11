import './App.css';
import ChitChat from './components/chitChat'
import UserProfile from './components/userProfile'
import ButtonHover from './components/buttonHover'
import ListUsers from './components/listUsers';
import CardResponsive from './components/CardResponsive';
import Menu from './components/menu_dropdown/Menu';
import WeightCart from './components/card_weight/WeightCart';

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
      <div className='flex flex-col justify-center items-center h-full'>
        <div className='m-auto w-96'>
          <Menu />
          <WeightCart/>
        </div>
      </div>
    </div>
  );
}

export default App;
