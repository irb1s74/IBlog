import {FC, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import SidebarHeader from "widgets/Sidebar/ui/SidebarHeader/SidebarHeader";
import styles from '../Sidebar.module.scss';
import SidebarMain from "widgets/Sidebar/ui/SidebarMain/SidebarMain";
import SidebarFooter from "widgets/Sidebar/ui/SidebarFooter/SidebarFooter";

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleSetCollapsed = () => {
        setCollapsed((prev) => !prev);
    };


    return (
        <div data-testid='sidebar' className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <SidebarHeader collapsed={collapsed} handleSetCollapsed={handleSetCollapsed}/>
            <SidebarMain/>
            <SidebarFooter/>
        </div>
    );
};
