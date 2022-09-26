import { ChangeEvent, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import sunSvg from 'shared/assets/icons/sun.svg';
import styles from './Switch.module.scss';

interface SwitchProps {
    className?: string,
    checked?: boolean,
    onChange?: (event: ChangeEvent<HTMLLabelElement>) => void
}

export const Switch: FC<SwitchProps> = ({ className, onChange, checked }) => (
    <div className={classNames(styles.Switch, { checked }, [className])}>
        <label htmlFor="switchInput" className={styles.label} onChange={onChange}>
            <input id="switchInput" className={styles.checkbox} defaultChecked={checked} type="checkbox" />
            <span className={styles.slider} />
        </label>
    </div>
);
