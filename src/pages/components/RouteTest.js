import {Link} from 'react-router-dom'
const RouteTest=()=>{
    return <>
    <Link to={'/'}>Home</Link>
    <br/>
    <Link to={'/Notice'}>공지</Link>
    <br/>
    <Link to={'PersonalInfo'}>개인 정보 관리</Link>
    <br/>
    <Link to={'AdressManage'}>주소 관리</Link>
    <br/>
    <Link to={'ReviewManage'}>리뷰 관리</Link>
    </>
}

export default RouteTest;