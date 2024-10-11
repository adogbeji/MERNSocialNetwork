const Nav = () => {
    return
    (<nav className="topnav">
  {'{'}/* {/* Logo */} */{'}'}
  <a href="#" className="topnav__logo-link">
    <img src="images/logo.png" alt="Website Logo" className="topnav__logo" />
  </a>
  {'{'}/* {/* Links */} */{'}'}
  <div className="topnav__link-dot-dropdown-box">
    <div className="topnav__link-box">
      <a href="#" className="topnav__link topnav__link--1">Booking</a>
      <a href="#" className="topnav__link topnav__link--2">Account</a>
      <a href="#" className="topnav__link topnav__link--3">Settings</a>
      <a href="#" className="topnav__link topnav__link--4">Orders</a>
    </div>
    {'{'}/* {/* Responsive Dot Icon Dropdown (#2) */} */{'}'}
    <div className="topnav__link-dot-dropdown-2">
      <span className="topnav__link-dot-icon-box-2" onclick="openTopnavLinkDotDropDownTwo()">
        <svg className="topnav__link-dot-icon-2">
          <use xlinkHref="images/sprite.svg#icon-dots-three-horizontal" />
        </svg>
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
>
    // <!-- Navbar End -->

    // <!-- Mobile Navbar Start -->
    <div>
  <nav className="topnav-mobilenav">
    {'{'}/* {/* Logo */} */{'}'}
    <a href="#" className="topnav-mobilenav__logo-link">
      <img src="images/logo.png" alt="Website Logo" className="topnav-mobilenav__logo" />
    </a>
    {'{'}/* {/* Hamburger Icon */} */{'}'}
    <div className="topnav-mobilenav__bars-icon" onclick="openMobileMenu()">
      <div className="topnav-mobilenav__bars-icon-line" />
      <div className="topnav-mobilenav__bars-icon-line" />
      <div className="topnav-mobilenav__bars-icon-line" />
    </div>
  </nav>
  <nav className="topnav-mobilenav__mobile-menu">
    <div id="mobileLinks" className="topnav-mobilenav__link-dropdown-search-box">
      <div className="topnav-mobilenav__link-box">
        <a href="#" className="topnav-mobilenav__link">Bookng</a>
        <a href="#" className="topnav-mobilenav__link">Account</a>
        <a href="#" className="topnav-mobilenav__link">Settings</a>
        <a href="#" className="topnav-mobilenav__link">Orders</a>
      </div>
    </div>
  </nav>
</div>)

    // {/* <!-- Mobile Navbar End --> */});
}

export default Nav;