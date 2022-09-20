import React from 'react';
import CMButton from './components/CMButton';
import SearchInput from './components/SearchInput';


function CategoryPage() {
 return (

<div>
<center>
 <SearchInput/>

 <button>검색</button>
 <br/>
 <br/>

 포장 &nbsp;&nbsp;&nbsp;한식 &nbsp;&nbsp;&nbsp;치킨
<br/>
분식  &nbsp;&nbsp;&nbsp;돈까스  &nbsp;&nbsp;&nbsp;족발/보쌈
<br/>
찜/탕 &nbsp;&nbsp;&nbsp; 구이 &nbsp;&nbsp;&nbsp; 피자
<br/>
중식 &nbsp;&nbsp;&nbsp; 일식 &nbsp; &nbsp;&nbsp;회/해물
<br/>
양식 &nbsp;&nbsp;&nbsp; 커피/차 &nbsp;&nbsp;&nbsp; 디저트
</center>
<br/>
<br/>
 <br/>
 </div>
 );
}
export default CategoryPage;
