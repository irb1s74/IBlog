import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button} from "shared/ui/Button/Button";
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = ({className}) => {
    const {t} = useTranslation();
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <div>{t('Произошла ошибка')}</div>
            <Button variant="contained" onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
