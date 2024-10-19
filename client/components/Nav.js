import Link from 'next/link';

import styles from './Nav.module.scss';

const Nav = () => {
    return (
        <header>

        {/* <!-- Navbar Start --> */}
        <nav className={styles.topnav}>
            {/* <!-- Logo --> */}
            <Link href="#" className="topnav__logo-link">
                {/* <img src="images/logo.png" alt="Website Logo" className="topnav__logo"> */}
            </Link>
                
                {/* <!-- Links --> */}
                <div className="topnav__link-dot-dropdown-box">
                    <div className="topnav__link-box">
                        <Link href="#" className="topnav__link topnav__link--1">Home</Link>
                        <Link href="#" className="topnav__link topnav__link--2">Login</Link>
                        <Link href="#" className="topnav__link topnav__link--3">Register</Link>
                    </div>
                    
                    {/* <!-- Responsive Dot Icon Dropdown (#2) --> */}
                    <div className="topnav__link-dot-dropdown-2">
                        {/* <span className="topnav__link-dot-icon-box-2" onclick="openTopnavLinkDotDropDownTwo()">
                            <svg className="topnav__link-dot-icon-2">
                                <use xlink:href="images/sprite.svg#icon-dots-three-horizontal"></use>
                            </svg>
                        </span> */}
                        <div id="topNavLinkDotDropdown_2" className="topnav__link-dot_2-dropdown-content">
                            <Link href="#" className="topnav__link-dot_2-link topnav__link-dot_2-link--1">
                                Home
                            </Link>
                            <Link href="#" className="topnav__link-dot_2-link topnav__link-dot_2-link--2">
                                Login
                            </Link>
                            <Link href="#" className="topnav__link-dot_2-link topnav__link-dot_2-link--3">
                                Register
                            </Link>
                        </div>
                    </div>
            
                </div>

        </nav>
        {/* <!-- Navbar End --> */}


        {/* <!-- Mobile Navbar Start --> */}
        <nav className="topnav-mobilenav">

            {/* <!-- Logo --> */}
            <Link href="#" className="topnav-mobilenav__logo-link">
                {/* <img src="images/logo.png" alt="Website Logo" className="topnav-mobilenav__logo"> */}
            </Link>

            {/* <!-- Hamburger Icon --> */}
            <div className="topnav-mobilenav__bars-icon" onclick="openMobileMenu()">
                <div className="topnav-mobilenav__bars-icon-line"></div>
                <div className="topnav-mobilenav__bars-icon-line"></div>
                <div className="topnav-mobilenav__bars-icon-line"></div>
            </div>

        </nav>
    
        <nav className="topnav-mobilenav__mobile-menu">

            <div className="topnav-mobilenav__link-box">
                <Link href="#" className="topnav-mobilenav__link">Bookng</Link>
                <Link href="#" className="topnav-mobilenav__link">Account</Link>
                <Link href="#" className="topnav-mobilenav__link">Settings</Link>
                <Link href="#" className="topnav-mobilenav__link">Orders</Link>
            </div>
        
        </nav>
        {/* <!-- Mobile Navbar End --> */}

        </header>
    )
}

export default Nav;