import React from 'react';
import CMButton from './components/CMButton';
import SearchInput from './components/SearchInput';
import HeadButton from './components/HeadButton';

function MainPage() {
 return (

<div>
<center>
    <label>현재 선택된 주소</label>
    <br/>
 <SearchInput/>

 <CMButton text={'검색'} />
 <br/>
 <br/>
 <HeadButton text={'배달'}/>
 <br/>
 <br/>
 <HeadButton text={'포장'}/>
 <br/>
 <br/>
 <HeadButton text={'현재 배달 현황1'}/>
 <br/>
 <br/>
 <HeadButton text={'현재 배달 현황2'}/>
 
</center>
<br/>
<br/>
 <br/>
 </div>
 );
}
export default MainPage;
