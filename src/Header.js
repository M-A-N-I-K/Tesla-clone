import React, { useState } from 'react'
import "./Header.css"
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [menuStatus, setMenuStatus] = useState(false);
    return (
        <div className='header'>
            <img className='header__img' src="https://www.img2link.com/images/2022/12/25/d632cc0562bba629489c99d48514e151.png" alt="Tesla Logo" />
            <ol className='header__model'>
                <li><a href="https://"><span>Model S</span></a></li>
                <li><a href="https://"><span>Model 3</span></a></li>
                <li><a href="https://"><span>Model X</span></a></li>
                <li><a href="https://"><span>Model Y</span></a></li>
                <li><a href="https://"><span>Solar Roof</span></a></li>
                <li><a href="https://"><span>Solar Panels</span></a></li>
            </ol>
            <ol className='header__account'>
                <li><a href="https://"><span>Shop</span></a></li>
                <li><a href="https://"><span>Account</span></a></li>
                <li><a href="https://" onClick={() => { setMenuStatus(true) }}><span>Menu</span></a></li>
            </ol>
            {menuStatus && <ol className='menuNav' status={menuStatus}>
                <div className="wrapper">
                    <CloseIcon className='closeIcon' onClick={() => { setMenuStatus(false) }} />
                </div>
                <li><a href="https://">Existing Inventory</a></li>
                <li><a href="https://">Used Inventory</a></li>
                <li><a href="https://">Trade-In</a></li>
                <li><a href="https://">Demo Drive</a></li>
                <li><a href="https://">Insurance</a></li>
                <li><a href="https://">Cybertruck</a></li>
                <li><a href="https://">Roadster</a></li>
                <li><a href="https://">Semi</a></li>
                <li><a href="https://">Charging</a></li>
                <li><a href="https://">Powerwall</a></li>
                <li><a href="https://">Commercial Energy</a></li>
                <li><a href="https://">Utilities</a></li>
                <li><a href="https://">Find Us</a></li>
                <li><a href="https://">Support</a></li>
                <li><a href="https://">Investor Relations</a></li>
            </ol>}
        </div>
    )
}

export default Header
