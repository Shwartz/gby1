import React from 'react';
import {Link} from 'gatsby';
import styles from './Navigation.module.scss';

const mainMenuDefinition = [
    {'About': '/about'},
    {'Blog': '/blog'},
    {'Contact us': '/contact'},
];

const mainMenu = (arr) => {
    return arr.map((obj, index) => {
        const pageName = Object.keys(obj)[0];
        const slug     = obj[pageName];

        return (
            <Link
                key={index}
                to={slug}
                activeClassName={styles.active}
            >{pageName}
            </Link>
        );
    });
};

export const Navigation = () => (
    <nav className={styles.menu}>
        {mainMenu(mainMenuDefinition)}
        <a href="https://www.migraine-detective.com/open-diary" className={styles.diary}>Go to Diary »</a>
    </nav>
);
