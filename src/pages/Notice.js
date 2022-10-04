import React from 'react';

function greeting(){
alert('click!');
document.location.href('/')
}

function Settings() {
 return (
 <div>
    <center>
    
 <h1>공지사항 </h1> 
 <button onClick={greeting}> 버전 업데이트 관련 공지 </button>
 <br/>
 <br/>
 <button>배달팁 관련 공지</button>
 <br/>
 <br/>
 <button>세번째 공지</button>
 <br/>
 <br/>

 </center>
 </div>
 );
}


export default Settings;
