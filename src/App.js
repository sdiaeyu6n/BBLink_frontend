import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import CMInput from './pages/components/CMInput';
import CMButton from './pages/components/CMButton';
import { BrowserView, MobileView } from 'react-device-detect'
import JoinAdress from './pages/JoinAdress';
import JoinMoney from './pages/JoinMoney';
import MyPage from './pages/MyPage';
import CategoryPage from './pages/CategoryPage';
import AdressManage from './pages/AdressManage';
import ReviewManage from './pages/ReviewManage';
import WriteReview from './pages/WriteReview';
import Settings from './pages/Settings';
import Notice from './pages/Notice'
import PersonalInfo from './pages/PersonalInfo';
import MainPage from './pages/MainPage';
function App() {
 var container = {
 backgroundColor: 'white',
 width: '40%',
 margin: '10 auto',
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
 <hr/>
<MainPage/>
<hr/>
<MyPage/>
<hr/>
<CategoryPage/>
<hr/>
<PersonalInfo/>
<hr/>
<AdressManage/>
<hr/>
<ReviewManage/>
<hr/>
<WriteReview/>
<hr/>
<Settings/>
<hr/>
<Notice/>

 </div>
 );
}

export default App;