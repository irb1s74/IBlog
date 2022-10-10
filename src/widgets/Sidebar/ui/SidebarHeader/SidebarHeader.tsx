import {FC} from "react";
import {Button} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import SidebarBtn from "../SidebarBtn/SidebarBtn";
import styles from "../Sidebar.module.scss";

interface SidebarHeaderProps {
    handleSetCollapsed: () => void;
    collapsed: boolean
}

const SidebarHeader: FC<SidebarHeaderProps> = ({handleSetCollapsed, collapsed}) => {
    const {t, i18n} = useTranslation();
    const handleChangeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <div className={styles.Sidebar__header}>
            <div className={styles.logo}>
                {t('IBlog')}
            </div>
            <Button onClick={handleChangeLanguage}>{t('Переключать')}</Button>
            <SidebarBtn handleSetCollapsed={handleSetCollapsed} collapsed={collapsed}/>
        </div>
    );
};
export default SidebarHeader
