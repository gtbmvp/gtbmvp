import React from 'react';
import Header from 'src/features/Header/Header';

interface ILayout {
    children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
    return (
        <div className="min-h-screen flex-col">
            <Header />
            <div className="px-4 grow">{children}</div>
        </div>
    );
};

export default Layout;
