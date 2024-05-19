import React from 'react';
import Logo from '../Logo/Logo';
import ThemeSwitcher from '../../shared/ui/Switcher/ThemeSwitcher';

const Header = () => {
    return (
        <header className="flex justify-between items-center sticky top-0 left-0 p-4 z-10 bg-gray-300 dark:bg-gray-800">
            <Logo />
            <ThemeSwitcher />
        </header>
    );
};

export default Header;
