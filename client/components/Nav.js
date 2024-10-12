import Link from 'next/link';

const Nav = () => {
    return (
        <header>

        {/* <!-- Navbar Start --> */}
        <nav className="topnav">
            {/* <!-- Logo --> */}
            <a href="#" className="topnav__logo-link">
                {/* <img src="images/logo.png" alt="Website Logo" className="topnav__logo"> */}
            </a>

            
            {/* <!-- Navigation Links + Icons + Profile Picture -->
            <div className="topnav__link-icon-box"> */}
                
                {/* <!-- Links --> */}
                <div className="topnav__link-dot-dropdown-box">
                    <div className="topnav__link-box">
                        <Link href="/" className="topnav__link topnav__link--1">
                            <a>Home</a>
                        </Link>

                        <Link href="#" className="topnav__link topnav__link--2">
                            <a>Login</a>
                        </Link>

                        <Link href="#" className="topnav__link topnav__link--3">
                            <a>Register</a>
                        </Link>

                        {/* <a href="#" className="topnav__link topnav__link--1">Booking</a> */}
                        {/* <a href="#" className="topnav__link topnav__link--2">Account</a> */}
                        {/* <a href="#" className="topnav__link topnav__link--3">Settings</a> */}
                        <a href="#" className="topnav__link topnav__link--4">Orders</a>
                    </div>
                    
                    {/* <!-- Responsive Dot Icon Dropdown (#2) --> */}
                    <div className="topnav__link-dot-dropdown-2">
                        <span className="topnav__link-dot-icon-box-2" onclick="openTopnavLinkDotDropDownTwo()">
                            {/* <svg className="topnav__link-dot-icon-2">
                                <use xlink:href="images/sprite.svg#icon-dots-three-horizontal"></use>
                            </svg> */}
                        </span>
                        <div id="topNavLinkDotDropdown_2" className="topnav__link-dot_2-dropdown-content">
                            <a href="#" className="topnav__link-dot_2-link topnav__link-dot_2-link--1">
                                Booking
                            </a>
                            <a href="#" className="topnav__link-dot_2-link topnav__link-dot_2-link--2">
                                Account
                            </a>
                            <a href="#" className="topnav__link-dot_2-link topnav__link-dot_2-link--3">
                                Settings
                            </a>
                            <a href="#" className="topnav__link-dot_2-link topnav__link-dot_2-link--4">
                                Orders
                            </a>
                        </div>
                    </div>
            
                </div>

        </nav>
        {/* <!-- Navbar End --> */}


        {/* <!-- Mobile Navbar Start --> */}
        <nav className="topnav-mobilenav">

            {/* <!-- Logo --> */}
            <a href="#" className="topnav-mobilenav__logo-link">
                {/* <img src="images/logo.png" alt="Website Logo" className="topnav-mobilenav__logo"> */}
            </a>

            {/* <!-- Hamburger Icon --> */}
            <div className="topnav-mobilenav__bars-icon" onclick="openMobileMenu()">
                <div className="topnav-mobilenav__bars-icon-line"></div>
                <div className="topnav-mobilenav__bars-icon-line"></div>
                <div className="topnav-mobilenav__bars-icon-line"></div>
            </div>

        </nav>
    
        <nav className="topnav-mobilenav__mobile-menu">

            <div className="topnav-mobilenav__link-box">
                <a href="#" className="topnav-mobilenav__link">Bookng</a>
                <a href="#" className="topnav-mobilenav__link">Account</a>
                <a href="#" className="topnav-mobilenav__link">Settings</a>
                <a href="#" className="topnav-mobilenav__link">Orders</a>
            </div>
        
        </nav>
        {/* <!-- Mobile Navbar End --> */}

        </header>
    )
}

export default Nav;