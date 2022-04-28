import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Nav, Link, MenuBtn, LinkResume } from './Navigation.style';

function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuToggle = () => {
    setIsOpenMenu(prevState => {
      return !prevState;
    });
  };

  return (
    <>
      <MenuBtn>
        {isOpenMenu ? (
          <MdClose size="40" onClick={menuToggle} />
        ) : (
          <MdMenu size="40" onClick={menuToggle} />
        )}
      </MenuBtn>
      <Nav menuToggle={isOpenMenu}>
        <Link to="/" onClick={menuToggle}>
          Home
        </Link>

        <LinkResume
          href=""
          target="_blank"
          rel="noreferrer"
          onClick={menuToggle}
        >
          Resume
        </LinkResume>
      </Nav>
    </>
  );
}

export default Navigation;
