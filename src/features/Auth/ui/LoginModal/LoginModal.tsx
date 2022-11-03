import {FC, Suspense} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './LoginModal.module.scss'
import {Modal} from "shared/ui/Modal/Modal";
import {LoginFormAsync} from "features/Auth/ui/LoginForm/LoginForm.async";
import {Loader} from "shared/ui/Loader/Loader";

interface LoginModalProps {
    className?: string
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({className, isOpen, onClose}) => {
    return (
        <Modal className={classNames(styles.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync/>
            </Suspense>
        </Modal>
    );
};
