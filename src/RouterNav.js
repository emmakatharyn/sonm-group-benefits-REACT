import { pagesComponents } from './pages/pagesComponents';


{/* <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode> */}
function RouterNav() {
    return (
      <nav class='navbar navbar-expand-lg bg-light'>
        <div class='container-fluid'>
          <button
            class='navbar-toggler ms-auto'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarNav'>
            <ul class='navbar-nav'>
              {pagesComponents.map((page) => (
                <li class='nav-item'>
                  <a class='nav-link' href={page.path}>
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }