
function Header() {
    return (
        <header className="header">
            {/* <div className="header_bg_cover">
                <svg id="visual" viewBox="0 0 900 900" version="1.1" style={{width:"50vw"}}>
                    <path d="M0 120L37.5 139C75 158 150 196 225 196.5C300 197 375 160 450 162.3C525 164.7 600 206.3 675 208.3C750 210.3 825 172.7 862.5 153.8L900 135L900 0L862.5 0C825 0 750 0 675 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" fill="#0066FF" stroke-linecap="round" stroke-linejoin="miter">
                </path>
                </svg>
            </div> */}
            <div className="header_wrapper">
                <div className="header_wrapper_brand">
                    <span>M_STORE</span>
                </div>
                <div className="header_wrapper_nav">
                    <nav className="header_wrapper_nav_nav">
                        <ul className="header_wrapper_nav_nav_ul">
                            <li className="header_wrapper_nav_nav_ul_li"><a href="#" className="header_wrapper_nav_nav_li_a">Home</a></li>
                            <li className="header_wrapper_nav_nav_ul_li"><a href="#" className="header_wrapper_nav_nav_li_a">Cart</a></li>
                            <li className="header_wrapper_nav_nav_ul_li"><a href="#" className="header_wrapper_nav_nav_li_a">About us</a></li>
                            <li className="header_wrapper_nav_nav_ul_li"><a href="#" className="header_wrapper_nav_nav_li_a">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header_wrapper_utils">
                    <div className="header_wrapper_utils_wrapper">
                        <div className="header_wrapper_utils_wrapper_search">
                            <form action="">
                                <input type="text" className="header_wrapper_utils_wrapper_search_input" />
                            </form>
                        </div>
                        <div className="header_wrapper_utils_wrapper_sign_up">
                            <button className="header_wrapper_utils_wrapper_sign_up_btn">
                                <svg id="icon-user" viewBox="0 0 24 24">
                                    <path d="M12 15c0 0-8 0-11 7 0 0 5.010 2 11 2s11-2 11-2c-3-7-11-7-11-7zM12 14c3 0 5-3 5-8s-5-5-5-5-5 0-5 5 2 8 5 8z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        {/* Intext */}
        <div className="header_explorer">
                <div className="header_explorer_wrapper">
                    <div className="header_explorer_wrapper_leftpane">
                        <h1 className="header_explorer_wrapper_leftpane_heading">
                            JUST COME IN & PLACE AN ORDER
                        </h1>
                        <p className="header_explorer_wrapper_leftpane_p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Est unde fugit assumenda omnis quibusdam saepe, aperiam culpa expedita
                            optio numquam tenetur nemo earum porro delectus enim provident
                            consectetur quod mollitia!
                        </p>
                        <div className="header_explorer_wrapper_leftpane_btns">
                            <button className="header_explorer_wrapper_leftpane_btns_now">
                                Order Now
                            </button>
                            <button className="header_explorer_wrapper_leftpane_btns_explore">
                                Explore More
                                <svg id="icon-arrow_right_alt" viewBox="0 0 24 24">
                                    <path d="M16.031 11.016v-3l3.984 3.984-3.984 3.984v-3h-12.047v-1.969h12.047z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="header_explorer_wrapper_rightpane">
                            <div className="header_explorer_wrapper_rightpane_container">
                    </div>
                    </div>
            </div>
            </div>
            <svg id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150" style={{
                position: "absolute",
                bottom: "4.9rem",
                opacity: "0.5"
            }}>
        <defs>
        <linearGradient id="gradient" x1="67%" y1="3%" x2="33%" y2="97%">
            <stop offset="5%" stopColor="#00d084"></stop>
            <stop offset="95%" stopColor="#8ED1FC"></stop>
        </linearGradient>
        </defs>
        <path d="M 0,400 C 0,400 0,266 0,266 C 140.66666666666669,279.4666666666667 281.33333333333337,292.93333333333334 445,290 C 608.6666666666666,287.06666666666666 795.3333333333333,267.73333333333335 965,261 C 1134.6666666666667,254.26666666666662 1287.3333333333335,260.1333333333333 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path>
        <defs>
        <linearGradient id="gradient" x1="67%" y1="3%" x2="33%" y2="97%">
            <stop offset="5%" stopColor="#00d084"></stop>
            <stop offset="95%" stopColor="#8ED1FC"></stop>
        </linearGradient>
        </defs>
        <path d="M 0,400 C 0,400 0,133 0,133 C 194,150.86666666666667 388,168.73333333333335 533,163 C 678,157.26666666666665 774,127.93333333333332 917,119 C 1060,110.06666666666668 1250,121.53333333333333 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path>

</svg>
        </header>

            
  );
}

export default Header;
