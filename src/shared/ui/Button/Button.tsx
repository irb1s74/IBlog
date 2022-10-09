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
    testId?: string,
    variant?: string
}

export const Button: FC<ButtonProps> = ({className, children, onClick, testId, variant = ButtonVariants.contained}) => {
    return (
        <button type='button' onClick={onClick}
            data-testid={testId}
            className={classNames(styles.Button, {
                [styles.Button__contained]: variant === ButtonVariants.contained,
                [styles.Button__outlined]: variant === ButtonVariants.outlined,
                [styles.Button__text]: variant === ButtonVariants.text
            }, [className])}>
            {children}
        </button>
    );
};
