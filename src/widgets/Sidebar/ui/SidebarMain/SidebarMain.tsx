import React, {FC, memo} from 'react';
import styles from '../Sidebar.module.scss'
import HomeIcon from 'shared/assets/icons/home.svg'
import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames/classNames";

interface SidebarMainProps {
    collapsed: boolean
}

const SidebarMain: FC<SidebarMainProps> = ({collapsed}) => {
    const {t} = useTranslation()
    return (
        <div className={styles.Sidebar__main}>
            <div className={styles.list}>
                <div className={classNames(styles.listItem, {[styles.active]: true}, [])}>
                    <div className={styles.icon}><HomeIcon/></div>
                    <div className={styles.text}>{t('Домой')}</div>
                </div>
                <div className={classNames(styles.listItem, {}, [])}>
                    <div className={styles.icon}><HomeIcon/></div>
                    <div className={styles.text}>{t('Домой')}</div>
                </div>
            </div>
        </div>
    );
};

export default memo(SidebarMain);
