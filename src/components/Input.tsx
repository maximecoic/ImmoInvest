import React from 'react';

interface InputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, error, type = 'text' }) => {
    return (
        <div className="mb-4">
            <label className="block text-lg mb-1">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`border p-2 rounded-md w-full ${error ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-200`}
                aria-invalid={!!error}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
};

export default Input;