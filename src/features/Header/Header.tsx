import React from 'react';
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <header className="flex sticky top-0 left-0 p-4 z-10 bg-red-300">
            <Logo />
        </header>
    );
};

export default Header;
