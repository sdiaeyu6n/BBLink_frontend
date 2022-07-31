import React from 'react';
import CMButton from './components/CMButton';
import CMInput from './components/CMInput';
import HeadButton from './components/HeadButton'

function MyPage() {
 return (
 <div>
<HeadButton text={'닉네임'}/>
<CMButton text={'로그아웃'}/>
    <center>
    
 <h1>닉네임 </h1> 
 <CMButton text={'개인정보 관리'} />
 <br/>
 <br/>
 <CMButton text={'주소 관리'} />
 <br/>
 <br/>
 <CMButton text={'리뷰 관리'} />
 <br/>
 <br/>
 <CMButton text={'설정'} />
 <br/>
 <br/>
 <CMButton text={'공지 사항'} />
 <br/>
 <br/>
 <br/>
 </center>
 </div>
 );
}
export default MyPage;
