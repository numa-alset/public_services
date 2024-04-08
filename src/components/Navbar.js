import React from 'react';

const Navbar =() =>{
    return(
        <nav>
            <div className='nav-logo-container'>
                <img src='{logo}' alt='logo'/>
            </div>

            <div className='navbar-links-container'>
                <a href=''>try it out</a>
            </div>
            <button type="submit" className='Login Now'>Login Now</button>
            <div className=''>

            </div>
         </nav>
    ) 

}
export default Navbar;