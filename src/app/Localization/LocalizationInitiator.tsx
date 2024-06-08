import { FC, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LANG_STORAGE_KEY } from './i18n';

export const LocalizationInitiator: FC = () => {
    const { i18n } = useTranslation();

    useLayoutEffect(() => {
        localStorage.setItem(LANG_STORAGE_KEY, i18n.language);
        const html = document.body.parentElement;
        html.lang = i18n.language;
    }, [i18n.language]);

    return null;
};
