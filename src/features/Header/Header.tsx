import React from 'react';
import Logo from '../Logo/Logo';
import ThemeSwitch from '../../shared/ui/ThemeSwitch/ThemeSwitch';
import LangSwitch from '../../shared/ui/LangSwitch/LangSwitch';

const Header = () => {
    return (
        <header className="flex justify-between items-center sticky top-0 left-0 p-4 z-10 bg-gray-300 dark:bg-gray-800">
            <Logo />
            <div className="flex">
                <ThemeSwitch />
                <LangSwitch />
            </div>
        </header>
    );
};

export default Header;
