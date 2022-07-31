import React from 'react';
import CMButton from './components/CMButton';
import CMInput from './components/CMInput';
import HeadButton from './components/HeadButton'

function Settings() {
 return (
 <div>
    <center>
    
 <h1>설정 </h1> 
 <CMButton text={'푸시 알림 동의'} />
 <label>온오프 버튼</label>
 <br/>
 <br/>
 <CMButton text={'SMS 수신 동의'} />
 <label>온오프 버튼</label>
 <br/>
 <br/>
 <CMButton text={'이메일 수신 동의'} />
 <label>온오프 버튼</label>
 <br/>
 <br/>

 </center>
 </div>
 );
}
export default Settings;
