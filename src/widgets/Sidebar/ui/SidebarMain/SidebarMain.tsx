import React, {FC, memo} from 'react';
import styles from '../Sidebar.module.scss'
import HomeIcon from 'shared/assets/icons/home.svg'
import BookIcon from 'shared/assets/icons/book.svg'
import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames/classNames";
import {Link, useLocation} from "react-router-dom";

interface SidebarMainProps {
}

const SidebarMain: FC<SidebarMainProps> = () => {
    const {t} = useTranslation()
    const location = useLocation();
    return (
        <div className={styles.Sidebar__main}>
            <div className={styles.list}>
                <Link to='/' className={classNames(styles.listItem, {[styles.active]: "/" === location.pathname}, [])}>
                    <div className={styles.icon}><HomeIcon/></div>
                    <div className={styles.text}>{t('Домой')}</div>
                </Link>
                <Link to='/about'
                    className={classNames(styles.listItem, {[styles.active]: "/about" === location.pathname}, [])}>
                    <div className={styles.icon}><BookIcon/></div>
                    <div className={styles.text}>{t('Информация')}</div>
                </Link>
            </div>
        </div>
    );
};

export default memo(SidebarMain);
