import {ChangeEvent, InputHTMLAttributes, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    label?: string;
    onChange?: (value: string) => void;
}


export const Input = memo((props: InputProps) => {
    const {
        className,
        onChange,
        value,
        label = '',
        type = 'text'
    } = props;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    }

    return (
        <label className={styles.Label}>
            <input
                className={classNames(styles.Input, {}, [className])}
                placeholder="&nbsp;"
                type={type}
                value={value}
                onChange={onChangeHandler}
            />
            <span className={styles.Label__name}>{label}</span>
            <span className={styles.Label__bg}/>
        </label>
    );
});
