import './App.css';
import Calendar from './component/Calendar/Calendar';
import ChatBox from './component/ChaxBox/ChatBox';
import SharedFiles from './component/SharedFiles/SharedFiles';
import Todos from './component/Todos/Todos';
import UserBadge from './component/UserBadge/UserBadge';

function App() {
  return (
    <div className='App'>
      <UserBadge/>
      <div className='todos'>
        <Calendar/>
        <Todos/>
      </div>
      <div className='sharing'>
        <ChatBox/>
        <SharedFiles/>
      </div>
    </div>
  );
}

export default App;
