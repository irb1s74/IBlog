import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Link } from 'shared/ui/Link/Link';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    {t('IBlog')}
                </div>
                <div className={styles.actions}>
                    <div className={styles.links}>
                        <Link to="/">{t('Домой')}</Link>
                        <Link to="/about">{t('Информация')}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
