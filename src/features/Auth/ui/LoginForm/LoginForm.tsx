import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss'
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({className}) => {
    const {t} = useTranslation()
    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <div className={styles.content}>
                <Input label='Имя'/>
            </div>
            <div className={styles.footer}>
                <Button variant="text">
                    {t("Войти")}
                </Button>
            </div>
        </div>
    );
};
