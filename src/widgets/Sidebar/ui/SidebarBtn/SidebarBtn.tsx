import styles from '../Sidebar.module.scss';
import ChevronForward from 'shared/assets/icons/chevronForward.svg'
import ChevronBack from 'shared/assets/icons/chevronBack.svg'
import {FC} from "react";

interface SidebarBtnProps {
    collapsed: boolean
    handleSetCollapsed: () => void
}

const SidebarBtn: FC<SidebarBtnProps> = ({collapsed, handleSetCollapsed}) => {
    return (
        <button data-testid='sidebar-btn-toggle' onClick={handleSetCollapsed} className={styles.collapseBtn}>
            {collapsed ? <ChevronForward/> : <ChevronBack/>}
        </button>
    );
};

export default SidebarBtn;
