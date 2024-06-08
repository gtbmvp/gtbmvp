import React from 'react';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../../app/Localization/i18n';

const LangSwitch = () => {
    const { i18n } = useTranslation();
    const lang = (i18n.language as Locale) === Locale.ru ? Locale.en : Locale.ru;

    const toggleLang = () => {
        i18n.changeLanguage(lang);
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-cyan-800 dark:stroke-yellow-400 icon icon-tabler icons-tabler-outline icon-tabler-world cursor-pointer mr-2"
            onClick={toggleLang}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M3.6 9h16.8" />
            <path d="M3.6 15h16.8" />
            <path d="M11.5 3a17 17 0 0 0 0 18" />
            <path d="M12.5 3a17 17 0 0 1 0 18" />
        </svg>
    );
};

export default LangSwitch;
