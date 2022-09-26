import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './About.module.scss';

interface AboutProps {
    className?: string
}

const About: FC<AboutProps> = ({ className }) => (
    <div className={classNames(styles.About, {}, [className])}>
        about
    </div>
);
export default About;
