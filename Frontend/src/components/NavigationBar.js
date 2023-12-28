 // import {Navbar, Container, Nav} from "react-bootstrap"
//bg-dark border-bottom border-body
const NavigationBar = () => {
  return (
    <nav  class="navbar navbar-expand bg-dark navbar-fixed">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Prak PAW</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/uas">UAS</a></li>
                  <li><a class="dropdown-item" href="/uts">UTS</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="/cv">curriculum Vitae</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default NavigationBar