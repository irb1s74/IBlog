import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => (
    <span className={classNames(styles.Loader, {}, [className])} />
);
