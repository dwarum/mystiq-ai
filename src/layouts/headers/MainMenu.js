import Link from "next/link";
const MainMenu = ({ search, setShow }) => {
  return (
    <nav className="main-menu">
      <ul>
        <li className="menu-item">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/service">
            <a>Services</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/career">
            <a>Careers</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default MainMenu;
