import React from 'react';
import styles from '../Sidebar.module.scss'
import {useTranslation} from "react-i18next";

const SidebarMain = () => {
    const {t} = useTranslation()
    return (
        <div className={styles.Sidebar__main}>
            <div className={styles.list}>
                <div className={styles.listItem}>
                    <div className={styles.icon}></div>
                    <div className={styles.text}>{t('Домой')}</div>
                </div>
            </div>
        </div>
    );
};

export default SidebarMain;
