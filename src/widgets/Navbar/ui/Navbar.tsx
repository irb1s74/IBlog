import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Link } from 'shared/ui/Link/Link';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
    <div className={classNames(styles.Navbar, {}, [className])}>
        <div className={styles.content}>
            <div className={styles.logo}>
                IBlog
            </div>
            <div className={styles.actions}>
                <div className={styles.links}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        </div>
    </div>
);
