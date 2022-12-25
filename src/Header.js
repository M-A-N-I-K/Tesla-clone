import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className='header'>
            <img className='header__img' src="https://www.img2link.com/images/2022/12/25/d632cc0562bba629489c99d48514e151.png" alt="Tesla Logo" />
            <ol className='header__model'>
                <li><a href="http://"><span>Model S</span></a></li>
                <li><a href="http://"><span>Model 3</span></a></li>
                <li><a href="http://"><span>Model X</span></a></li>
                <li><a href="http://"><span>Model Y</span></a></li>
                <li><a href="http://"><span>Solar Roof</span></a></li>
                <li><a href="http://"><span>Solar Panels</span></a></li>
            </ol>
            <ol className='header__account'>
                <li><a href="http://"><span>Shop</span></a></li>
                <li><a href="http://"><span>Account</span></a></li>
                <li><a href="http://"><span>Menu</span></a></li>
            </ol>
        </div>
    )
}

export default Header
