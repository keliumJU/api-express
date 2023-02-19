import './App.css';
import ChitChat from './components/chitChat'
import UserProfile from './components/userProfile'
import ButtonHover from './components/buttonHover'
import ListUsers from './components/listUsers';
import CardResponsive from './components/CardResponsive';
import Menu from './components/menu_dropdown/Menu';
import WeightCart from './components/card_weight/WeightCart';
import InputWeightMobile from './components/card_weight/InputWeightMovile';

function App() {
  return (
    <div>
      <h1 className="text-slate-400 font-bold underline">
        Hello world! with update from CD
      </h1>
      <ChitChat/>
      <UserProfile/>
      <ButtonHover/>
      <ListUsers />
      <CardResponsive />
      <div className='flex flex-col justify-center items-center h-full'>
        <div className='m-auto w-96'>
          <Menu />
          <InputWeightMobile />
          <WeightCart/>
        </div>
      </div>
    </div>
  );
}

export default App;
