import React from 'react';

interface IButton {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<IButton> = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="p-2 rounded-lg shadow bg-green-50 text-green-500">
            {children}
        </button>
    );
};

export default Button;
