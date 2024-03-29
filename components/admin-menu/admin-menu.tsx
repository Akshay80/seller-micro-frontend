import LogoutBtn from "./Logout";
const items = require('./../../data/admin_menu.json');

export function AdminMenu() {
  return (
    <div className='simplebar-content' style={{ padding: '0px' }}>
      <ul className='navbar-nav flex-column'>
        <div>
        {
          items && items.map((item: any, index: number) => {
            return (
              <li className='nav-item' key={index}>
                <a className='nav-link' href={item.href}>
                  <div className='d-flex align-items-center'>
                    <span className='nav-link-icon'>
                      <i className={`bi bi-${item.icon}`} />
                    </span>
                    <span className='nav-link-text'>{item.name}</span>
                  </div>
                </a>
              </li>
            )
          })
        }
        <LogoutBtn />
        </div>

   
       <div className="mt-5">
       <li className="nav-item">
          <a className="nav-link" target="_blank" href="https://testflight.apple.com/join/Lqom7mZE">
            <div className="d-flex align-items-center">
              <span className="nav-link-icon"><i className="bi bi-apple" /></span>
              <span className="nav-link-text">Apple Store</span>
            </div>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" target="_blank" href="https://appdistribution.firebase.google.com/pub/i/4f8391a88051acde">
            <div className="d-flex align-items-center">
              <span className="nav-link-icon"><i className="bi bi-google-play" /></span>
              <span className="nav-link-text">Google Play Store</span>
            </div>
          </a>
        </li>
       </div>
        
      </ul>
    </div >
  );
}

export default AdminMenu;