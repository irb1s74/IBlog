import {FC, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Switch} from 'shared/ui/Switch/Switch';
import {ETheme, useTheme} from 'app/providers/ThemeProvider';
import SidebarHeader from "widgets/Sidebar/ui/SidebarHeader/SidebarHeader";
import styles from '../Sidebar.module.scss';
import SidebarMain from "widgets/Sidebar/ui/SidebarMain/SidebarMain";
import SidebarFooter from "widgets/Sidebar/ui/SidebarFooter/SidebarFooter";

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {toggleThem, theme} = useTheme();

    const handleSetCollapsed = () => {
        setCollapsed((prev) => !prev);
    };


    return (
        <div data-testid='sidebar' className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <SidebarHeader collapsed={collapsed} handleSetCollapsed={handleSetCollapsed}/>
            <SidebarMain/>
            <Switch checked={theme === ETheme.DARK} onChange={toggleThem}/>
            <SidebarFooter/>
        </div>
    );
};
