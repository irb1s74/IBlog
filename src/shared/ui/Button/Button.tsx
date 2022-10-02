import {FC, ReactNode} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss'

interface ButtonProps {
    className?: string;
    children: ReactNode
}

export const Button: FC<ButtonProps> = ({className, children}) => {
    return (
        <div className={classNames(styles.Button, {}, [className])}>
            {children}
        </div>
    );
};
