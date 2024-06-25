import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-width flex justify-between items-center p-5">
        <Link to="/">
          <img className="mt-5" src="/bmw.png" width={215} />
        </Link>
        <Button title="Kaydol"/>
      </nav>
    </header>
  );
};

export default Header;
