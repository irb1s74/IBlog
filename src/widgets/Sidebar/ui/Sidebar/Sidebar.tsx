import {FC, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Switch} from 'shared/ui/Switch/Switch';
import {ETheme, useTheme} from 'app/providers/ThemeProvider';
import {useTranslation} from 'react-i18next';
import styles from './Sidebar.module.scss';
import {Button} from "shared/ui/Button/Button";

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const {t, i18n} = useTranslation();

    const [collapsed, setCollapsed] = useState(false);
    const {toggleThem, theme} = useTheme();

    const handleSetCollapsed = () => {
        setCollapsed((prev) => !prev);
    };
    const handleChangeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div data-testid='sidebar' className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <Button variant='outlined' data-testid='sidebar-btn-toggle'
                onClick={handleSetCollapsed}>{t('Переключать')}</Button>
            <Button onClick={handleChangeLanguage}>{t('Переключать')}</Button>
            <Switch checked={theme === ETheme.DARK} onChange={toggleThem}/>
        </div>
    );
};
