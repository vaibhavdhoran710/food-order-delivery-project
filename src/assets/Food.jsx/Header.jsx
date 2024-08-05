import './Header.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <div>
        <div className="head">
        <p className='logo' id='logo'>Fast-Food</p>
        <nav>

<Link className="styl" id="home" to="/"> Home</Link>

<Link className="styl" id="menu" to="/menu" >Menu </Link>
<Link className="styl" id="revi" to='/review'>Review </Link>
<Link className="styl" id="about" to='/addres'  >About </Link>
<Link className="styl" id="order" to='/order'> Order </Link>


</nav>
          <div className='search'>
           <div id="icon">
            <input id='search2' type="text"></input>
            <input type="button" value="Search" id="btn"></input>
           
          <Link to='/like'> <i className="fa-regular fa-heart"></i></Link>

          <Link to='/cart'> <i className="fa-solid fa-cart-shopping"> </i></Link> 
             
            
           
            
        </div>
        </div> 








        </div>


        </div>
    )
}