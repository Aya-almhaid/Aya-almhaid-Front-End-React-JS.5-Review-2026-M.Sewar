import "./header.css";

export default function Header() {
  return (
    <>
      <header>
        <nav className="navbar">
          <h1>logo</h1>
          <div>
            <ul className="nav-links">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
              <li>
                <a href="">Register</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
