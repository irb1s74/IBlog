import {FC, lazy} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './Main.module.scss'

interface MainProps {
    className?: string
}

const Main: FC<MainProps> = ({className}) => {
    return (
        <div className={classNames(styles.Main, {}, [className])}>
            Main
        </div>
    );
};

export default Main
