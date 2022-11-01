import {memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "../../model/slice/loginSlice";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import styles from './LoginForm.module.scss'
import {loginByUsername} from "features/Auth/model/services/loginByUsername";

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation()
    const {username, password, isLoading, error} = useSelector(getLoginState)
    const dispatch = useDispatch();
    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}))
    }, [dispatch, username, password])

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <div className={styles.title}>
                {t("Авторизация")}
            </div>
            <div className={styles.content}>
                <Input
                    label='Имя'
                    value={username}
                    onChange={onChangeUsername}
                />
                <Input
                    label='Password'
                    value={password}
                    type='password'
                    onChange={onChangePassword}
                />
            </div>
            <div className={styles.footer}>
                {error && (
                    <div style={{marginRight:"auto"}}>
                        {error}
                    </div>
                )}
                <Button onClick={onLoginClick} variant="outlined" disabled={isLoading}>
                    {t("Войти")}
                </Button>
            </div>
        </div>
    );
});
