import {Link} from 'react-router-dom'
import CartTP from '../assets/images/CartTP.png'
import CartTP2 from '../assets/images/CartTP2.png'
import {GlobalContext} from '../context/GlobalState'
import {useState, useContext} from 'react'


const Header = () => {
    const {user} = useContext(GlobalContext)
    const {Logout} = useContext(GlobalContext)

    return (
        
        <header className='terHeader'>
            <div>
                <Link to="/" className="nav-link">Home</Link>
            </div>

            <div>
            {Object.keys(user).length === 0 ? <h1>Ter Nordic</h1> : <h1>Ter Nordic - Velkommen {user[0].name}</h1>}
            </div>

                { Object.keys(user).length === 0 ? 

                    <div>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="nav-link">Register</Link>
                    </div>
                    
                    :

                    <div>
                        <img className='header_Image' src={CartTP2} height='25' width='30' alt="shopping cart"/>
                        <button onClick={Logout}>Log af</button>
                    </div>

                }
            
        </header>
    )
}

export default Header
