import React from 'react';

import { useTheme } from '../../../app/ThemeProvider';

const ThemeSwitch = () => {
    const { toggleTheme } = useTheme();

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-cyan-800 dark:stroke-yellow-400 icon icon-tabler icons-tabler-outline icon-tabler-moon cursor-pointer mr-2"
            onClick={toggleTheme}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        </svg>
    );
};

export default ThemeSwitch;
