import React, { useState } from 'react';
import Button from 'src/shared/ui/Button/Button';
import Modal from 'src/shared/ui/Modal/Modal';
import TextInput from 'src/shared/ui/TextInput/TextInput';

const InputModal = () => {
    const [inputValue, setInputValue] = useState('');
    const [visible, setVisible] = useState(false);

    return (
        <>
            <TextInput value={inputValue} onChange={setInputValue} placeholder="Text for Modal" />
            <Button onClick={() => setVisible(!visible)}>Show Modal</Button>
            <Modal visible={visible} onClose={() => setVisible(false)}>
                {inputValue}
            </Modal>
        </>
    );
};

export default InputModal;
