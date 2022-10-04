import React from 'react';
import CMInput from '../components/CMInput';


function WriteReview() {
 return (

<div>
<center>
    <h1>
        주문 내역
        </h1>
        
    <label>
        봉추찜닭 서울대입구역점</label>
        &nbsp; &nbsp; &nbsp;
        <button>리뷰 작성</button>
        <br/>

    <label>
        엽기떡볶이 동대문점</label>
        &nbsp; &nbsp; &nbsp;
        <button>리뷰 작성</button>
        <br/>
        <br/>
        <br/>
        <label>
        별점
        <br/> </label>
        <CMInput hint="리뷰" /><button>추가</button>
        <br/>
        <label>사진 넣을 자리!</label>
        <br/>
        <br/>

</center>
 </div>
 );
}
export default WriteReview;
