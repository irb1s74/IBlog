import {Switch} from "shared/ui/Switch/Switch";
import {ETheme, useTheme} from "app/providers/ThemeProvider";
import styles from "../Sidebar.module.scss"
import {Button} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

const SidebarFooter = () => {
    const {t, i18n} = useTranslation();
    const {toggleThem, theme} = useTheme();
    const handleChangeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <div className={styles.Sidebar__footer}>
            <Switch checked={theme === ETheme.DARK} onChange={toggleThem}/>
            <Button onClick={handleChangeLanguage}>{t('Переключать')}</Button>
        </div>
    );
};

export default SidebarFooter;
