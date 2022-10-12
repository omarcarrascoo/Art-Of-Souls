 import {Cart} from '../Cart'
 import Logo from '../../assets/imgs/logo.png'
 import './header.css'
 import { Profile } from '../profile' 
 import { Link } from 'react-router-dom'

 
 const Header = () =>{
    return(
        <section className="header">
            <div className="header__container">
                <div className="logo">
                   <img src={Logo} alt="Logo Art of Souls" />
                </div>
                <nav className="main__nav">
                    <ul>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/colecciones'>Colecciones</Link></li>
                        <li><Link to='/cuadros'>Cuadros</Link></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className="icons">
                    <div className="user icon">
                        <Profile />
                    </div>
                    <div className="cart icon">
                       <Link to='/carrito'><Cart/></Link>
                    </div>
                </div>
                
            </div>
        </section>
    )   
}
export default Header;