import {FC, lazy} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './Main.module.scss'
import {Switch} from "shared/ui/Switch/Switch";
import {useTheme, ETheme} from "app/providers/ThemeProvider";

interface MainProps {
    className?: string
}

const Main: FC<MainProps> = ({className}) => {
    const {toggleThem, theme} = useTheme()
    return (
        <div className={classNames(styles.Main, {}, [className])}>
            Main
            <Switch checked={theme === ETheme.DARK} onChange={toggleThem}/>
        </div>
    );
};

export default Main
