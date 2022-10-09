import {FC, ReactNode} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss'


export enum ButtonVariants {
    contained = "contained",
    outlined = "outlined",
    text = "text",
}

interface ButtonProps {
    className?: string;
    children: ReactNode,
    onClick?: () => void,
    variant?: string
}

export const Button: FC<ButtonProps> = ({className, children, onClick, variant = ButtonVariants.contained}) => {
    return (
        <button type='button' onClick={onClick}
            className={classNames(styles.Button, {
                [styles.Button__contained]: variant === ButtonVariants.contained,
                [styles.Button__outlined]: variant === ButtonVariants.outlined,
                [styles.Button__text]: variant === ButtonVariants.text
            }, [className])}>
            {children}
        </button>
    );
};
