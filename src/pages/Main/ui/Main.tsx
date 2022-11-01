import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {BugButton} from 'app/providers/ErrorBoundary';
import {useTranslation} from 'react-i18next';
import styles from './Main.module.scss';

interface MainProps {
    className?: string
}

const Main: FC<MainProps> = ({className}) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(styles.Main, {}, [className])}>
            {t('Main')}
            <BugButton/>
        </div>
    );
};
export default Main
