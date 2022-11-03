import {FC, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from './Navbar.module.scss';
import {Button} from "shared/ui/Button/Button";
import {LoginModal} from "features/Auth";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const [isAuthModal, setAuthModal] = useState(false)

    const onOpenAuthModal = () => {
        setAuthModal(true)
    }
    const onCloseAuthModal = () => {
        setAuthModal(false)
    }

    const onLogout = () => {
        dispatch(userActions.logout())
    }

    if(authData){
        return (
            <div className={classNames(styles.Navbar, {}, [className])}>
                <div className={styles.content}>
                    <div className={styles.title}>{t('Домой')}</div>
                    <div className={styles.actions}>
                        <Button onClick={onLogout}>
                            {t("Выйти")}
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.content}>
                <div className={styles.title}>{t('Домой')}</div>
                <div className={styles.actions}>
                    <Button onClick={onOpenAuthModal}>
                        {t("Войти")}
                    </Button>
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseAuthModal}
                    />
                </div>
            </div>
        </div>
    );
};
