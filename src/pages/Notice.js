import React from 'react';
import CMButton from './components/CMButton';
import CMInput from './components/CMInput';
import HeadButton from './components/HeadButton'

function Settings() {
 return (
 <div>
    <center>
    
 <h1>공지사항 </h1> 
 <CMButton text={'버전 업데이트 관련 공지'} />
 <br/>
 <br/>
 <CMButton text={'배달팁 관련 공지'} />
 <br/>
 <br/>
 <CMButton text={'안녕하세요'} />
 <br/>
 <br/>

 </center>
 </div>
 );
}
export default Settings;
