import React from 'react';
import HeadButton from '../components/HeadButton';
import {useNavigate} from "react-router-dom";


function MyPage() {

    const navigate=useNavigate();

    return (

    
 <div>

    <center>
    
 <h1>마이페이지 </h1> 
 <HeadButton text={'닉네임'}/>
<button>로그아웃</button>
<br/>
<br/>
<button onClick={()=>{
navigate('/PersonalInfo')
}
}>개인정보 관리</button>
 <br/>
 <br/>
 <button onClick={()=>{
navigate('/AdressManage')
}
}>주소 관리</button>
 <br/>
 <br/>
 <button onClick={()=>{
navigate('/ReviewManage')
}
}>리뷰 관리</button>
 <br/>
 <br/>
 <button onClick={()=>{
navigate('/Settings')
}
}>설정</button>
 <br/>
 <br/>
 <button onClick={()=>{
navigate('/Notice')
}
}>공지사항</button>
 <br/>
 <br/>
 <br/>
 </center>
 </div>
 );
}
export default MyPage;
