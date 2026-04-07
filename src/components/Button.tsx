import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 active:bg-blue-700 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {children}
        </button>
    );
};

export default Button;