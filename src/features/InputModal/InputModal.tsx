import React, { FC, useState } from 'react';
import TextInput from '../../shared/ui/TextInput/TextInput';
import Button from '../../shared/ui/Button/Button';
import Modal from '../../shared/ui/Modal/Modal';

const InputModal: FC = () => {
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
