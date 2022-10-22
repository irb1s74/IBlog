import React, {FC, ReactNode} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Modal.module.scss'

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void
}

export const Modal: FC<ModalProps> = ({className, children, isOpen, onClose}) => {
    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen
    }

    const onContentClick = (event: React.MouseEvent) => {
        event.stopPropagation()
    }

    if(!isOpen){
        return  null
    }

    return (
        <div className={classNames(styles.Modal, mods, [className])}>
            <div className={styles.overlay} onClick={onClose}>
                <div className={styles.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};
