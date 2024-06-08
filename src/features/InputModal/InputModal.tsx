import React, { FC, useState } from 'react';
import TextInput from '../../shared/ui/TextInput/TextInput';
import Button from '../../shared/ui/Button/Button';
import Modal from '../../shared/ui/Modal/Modal';

import { useTranslation } from 'react-i18next';

const InputModal: FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [visible, setVisible] = useState(false);

    const { t } = useTranslation();

    return (
        <>
            <TextInput value={inputValue} onChange={setInputValue} placeholder={t`components_InputModal_placeholder`} />
            <Button onClick={() => setVisible(!visible)}>{t`components_InputModal_button`}</Button>
            <Modal visible={visible} onClose={() => setVisible(false)}>
                {inputValue}
            </Modal>
        </>
    );
};

export default InputModal;
