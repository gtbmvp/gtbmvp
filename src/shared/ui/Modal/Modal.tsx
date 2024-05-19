import React from 'react';

interface IModalProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ visible, onClose, children }) => {
    return (
        visible && (
            <div className="fixed z-50 inset-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="relative bg-white p-8 rounded shadow-lg dark:shadow-white">
                    <button className="close absolute top-0 right-1 text-gray-600 cursor-pointer">
                        <span onClick={onClose}>&times;</span>
                    </button>
                    {children}
                </div>
            </div>
        )
    );
};

export default Modal;
