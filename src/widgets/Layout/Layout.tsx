import React from 'react';
import Header from '../../features/Header/Header';

interface ILayout {
    children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
    return (
        <div className="min-h-screen flex-col dark:bg-gray-700">
            <Header />
            <div className="p-4 grow">{children}</div>
        </div>
    );
};

export default Layout;
