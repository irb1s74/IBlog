import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <div>{t('Произошла ошибка')}</div>
        </div>
    );
};
