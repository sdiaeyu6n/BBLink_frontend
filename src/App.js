import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import CMInput from './pages/components/CMInput';
import CMButton from './pages/components/CMButton';
import { BrowserView, MobileView } from 'react-device-detect'
import JoinAdress from './pages/JoinAdress';
import JoinMoney from './pages/JoinMoney';

function App() {
 var container = {
 backgroundColor: 'white',
 width: '80%',
 margin: '0 auto',
 };
 return (
 <div style={container}>
 <LoginPage />
 <hr />
 <JoinPage />
 <hr />
 <JoinAdress/>
 <hr />
 <JoinMoney/>
 <hr />
 <mypage/>

 </div>
 );
}



export default App;