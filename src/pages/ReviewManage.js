import React from 'react';
import CMButton from './components/CMButton';
import SearchInput from './components/SearchInput';


function ReviewManage() {
 return (

<div>
<center>
    <h1>
        리뷰 관리
        </h1>
        
    <label>
        엽기떡볶이 동대문점
        별점 5.0
        너무 맛있어요~</label>
        &nbsp; &nbsp; &nbsp;
        <CMButton text={'삭제'}/>
        <br/>

    <label>
        봉추찜닭 서울대입구역점
        별점 4.8
        양이 엄청 많아요!</label>
        &nbsp; &nbsp; &nbsp;
        <CMButton text={'삭제'} />
        <br/>
        <br/>
        <br/>
 <CMButton text={'리뷰 쓰기'} />
        <br/>
        <br/>
</center>
 </div>
 );
}
export default ReviewManage;
