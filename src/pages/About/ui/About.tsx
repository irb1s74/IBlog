import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from "react-i18next";
import styles from './About.module.scss';

interface AboutProps {
    className?: string
}

const About: FC<AboutProps> = ({className}) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(styles.About, {}, [className])}>
            {t("about")}
        </div>
    )
};
export default About;
