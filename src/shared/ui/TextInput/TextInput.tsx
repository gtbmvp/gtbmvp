import React, { FC, useState } from 'react';

interface ITextInput {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

const TextInput: FC<ITextInput> = ({ value, onChange, placeholder }) => {
    const [inputValue, setInputValue] = useState(value || '');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        if (onChange) onChange(newValue);
    };

    return (
        <input
            type="text"
            placeholder={placeholder || ''}
            value={inputValue}
            onChange={handleChange}
            className="p-2 shadow rounded-lg dark:shadow-white"
        />
    );
};

export default TextInput;
