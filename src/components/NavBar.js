import {Mujer} from './Mujer';
import {Hombre} from './Hombre'
import {Niños} from './Niños'
import {Login} from './Login'
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';
 
 
 
export const NavBar = ({children}) =>{
    return(
        <nav>
            <Link to='/'><h1>LOGO</h1></Link>
            <ul>
                <li><Link to='/'><h2>Home</h2></Link></li>
                <li><Link to='mujer'><Mujer /></Link></li>
                <li><Link to='hombre'><Hombre /></Link></li>
                <li><Link to='chicos'><Niños /></Link></li>
                <li><Link to='login'><Login /></Link></li>
                <li><Link to='carrito'><CartWidget /></Link></li>
            </ul>
        </nav>
    )
}
