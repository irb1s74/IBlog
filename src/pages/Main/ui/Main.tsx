import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Main.module.scss';

interface MainProps {
    className?: string
}

const Main: FC<MainProps> = ({ className }) => (
    <div className={classNames(styles.Main, {}, [className])}>
        Main
    </div>
);

export default Main;