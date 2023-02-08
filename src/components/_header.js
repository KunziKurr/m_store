
function Header() {
  return (
      <div className="header">
          <div className="header_bg_cover">
              <svg id="visual" viewBox="0 0 900 900" version="1.1" style={{width:"50vw"}}>
                <path d="M0 120L37.5 139C75 158 150 196 225 196.5C300 197 375 160 450 162.3C525 164.7 600 206.3 675 208.3C750 210.3 825 172.7 862.5 153.8L900 135L900 0L862.5 0C825 0 750 0 675 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" fill="#0066FF" stroke-linecap="round" stroke-linejoin="miter">
              </path>
              </svg>
          </div>
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
                          search
                      </div>
                      <div className="header_wrapper_utils_wrapper_sign_up">
                          sign Up
                      </div>
                  </div>
              </div>

          </div>
    </div>
  );
}

export default Header;
