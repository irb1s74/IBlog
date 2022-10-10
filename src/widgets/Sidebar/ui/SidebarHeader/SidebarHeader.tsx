import {FC, memo} from "react";
import {Button} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import SidebarBtn from "../SidebarBtn/SidebarBtn";
import styles from "../Sidebar.module.scss";

interface SidebarHeaderProps {
    handleSetCollapsed: () => void;
    collapsed: boolean
}

const SidebarHeader: FC<SidebarHeaderProps> = ({handleSetCollapsed, collapsed}) => {
    const {t} = useTranslation();

    return (
        <div className={styles.Sidebar__header}>
            <div className={styles.logo}>
                {t('IBlog')}
            </div>
            <SidebarBtn handleSetCollapsed={handleSetCollapsed} collapsed={collapsed}/>
        </div>
    );
};
export default memo(SidebarHeader);
