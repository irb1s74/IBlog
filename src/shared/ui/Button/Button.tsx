import {FC, ReactNode} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss'

interface ButtonProps {
    className?: string;
    children: ReactNode,
    onClick?: () => void,
    testId?: string,
    variant?: string,
    color?: string,
    disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    onClick, testId,
    variant = "contained",
    disabled
}) => {
    const mods = {
        [styles.contained]: variant === "contained",
        [styles.outlined]: variant === "outlined",
        [styles.text]: variant === "text",
        [styles.disabled]: disabled
    }


    return (
        <button
            type='button'
            onClick={onClick}
            data-testid={testId}
            className={classNames(styles.Button, mods, [className])}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
