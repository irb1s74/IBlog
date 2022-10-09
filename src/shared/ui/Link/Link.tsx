import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Link as RoutLink, LinkProps} from 'react-router-dom';
import styles from './Link.module.scss';

interface ILink extends LinkProps {
    className?: string
}

export const Link: FC<ILink> = ({
    className, to, children, ...otherProps
}) => (
    <div className={classNames(styles.LinkWrapper, {}, [])}>
        <RoutLink
            to={to}
            className={classNames(styles.Link, {}, [className])}
            {...otherProps}
        >
            {children}
        </RoutLink>
    </div>

);
