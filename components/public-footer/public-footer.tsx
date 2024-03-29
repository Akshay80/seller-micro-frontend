import items from '../../data/footer.json';

export function PublicFooter() {
  return (
    <div>
      <>
        <footer className='footer dark-mode bg-dark'>
          <div className='container pt-lg-4 pb-2 text-white'>
            <div className='d-lg-flex justify-content-around'>
              <div className='col-4'>
                <div className='d-flex align-items-center gap-2'>
                  <h1 className='text-white'>WorldTradeX</h1>
                </div>
                <br />
                <div>
                  <h3 className='text-white'>
                    Reach millions of B2B buyers globally
                  </h3>
                </div>
                <hr />
                <div className='d-flex gap-4 fs-3 text-white'>
                  <i className='bi bi-facebook'></i>
                  <i className='bi bi-instagram'></i>
                  <i className='bi bi-linkedin'></i>
                  <i className='bi bi-buildings'></i>
                </div>
                <div className='fs-7'>WorldTradeX Seller App</div>
              </div>
              
              {
                items.map((menu: any, index: number) => (
                  <div className='d-flex flex-column gap-3 px-3' key={index}>
                    {
                      menu.href ? <a className='nav-link' href={menu.href}>
                        <h4 className='text-white'>{menu.name}</h4>
                      </a> : <h4 className='text-white'>{menu.name}</h4>
                    }

                    {
                      menu?.items?.map((subMenu: any, index: number) =>
                        <a className='nav-link' href={subMenu?.href} key={index}>
                          <span className='cursor-pointer' key={index}>{subMenu?.name}</span>
                        </a>
                      )
                    }
                  </div>
                ))
              }
              
            </div>
          </div>
        </footer>
        <div className='d-flex flex-column align-items-center justify-content-center py-3 text-muted'>
          <p> © 1999-2023 WorldTradeX | All rights reserved</p>
        </div>
      </>
    </div>
  );
}

export default PublicFooter;