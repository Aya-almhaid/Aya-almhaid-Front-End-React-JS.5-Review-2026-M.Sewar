import "./header.css";

export default function Header() {
  return (
    <>
      <header>
        <nav className="navbar">
          <h1>logo</h1>
          <div>
            <ul className="nav-links">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Login</li>
              <li>Register</li>
              <li>Services</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
