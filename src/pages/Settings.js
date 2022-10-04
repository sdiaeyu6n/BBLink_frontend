import React from 'react';
import CMButton from '../components/CMButton';
import ToggleSwitch from '../components/ToggleSwitch';

function Settings() {
 return (
 <div>
    <center>
    
 <h1>설정 </h1> 
 <CMButton text={'푸시 알림 동의'} />
 &nbsp;&nbsp;

<ToggleSwitch/> 
 <br/>
 <br/>
 <CMButton text={'SMS 수신 동의'} /> &nbsp;&nbsp;
 <ToggleSwitch/>
 <br/>
 <br/>
 <CMButton text={'이메일 수신 동의'} /> &nbsp;&nbsp;
 <ToggleSwitch/>
 <br/>
 <br/>

 </center>
 </div>
 );
}
export default Settings;
