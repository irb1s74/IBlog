import {memo, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import {loginByUsername} from "../../model/services/loginByUsername";
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import styles from './LoginForm.module.scss'
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader";

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation()
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
        <DynamicModuleLoader reducers={initialReducers}>
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
                        <div style={{marginRight: "auto"}}>
                            {error}
                        </div>
                    )}
                    <Button onClick={onLoginClick} variant="outlined" disabled={isLoading}>
                        {t("Войти")}
                    </Button>
                </div>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
