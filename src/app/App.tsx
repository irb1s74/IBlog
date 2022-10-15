import {Suspense, useState} from 'react';
import {AppRouter} from 'app/providers/router';
import {classNames} from 'shared/lib/classNames/classNames';
import {Sidebar} from 'widgets/Sidebar';
import {Navbar} from 'widgets/Navbar';
import {useTheme} from './providers/ThemeProvider';
import {Modal} from "shared/ui/Modal/Modal";
import './styles/index.scss';
import {Button} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

function App() {
    const {theme} = useTheme();
    const [isOpen, setOpen] = useState(false)
    const {t} = useTranslation()

    const onClose = () => {
        setOpen(false)
        console.log("ale")
    }


    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Button onClick={() => setOpen(true)}>{t("Открыть модал")}</Button>
                <Modal isOpen={isOpen} onClose={onClose}/>
                <div className="flex">
                    <Sidebar/>
                    <div className="flex-grow">
                        <Navbar/>
                        <AppRouter/>
                    </div>
                </div>
            </Suspense>
        </div>
    );
}

export default App;
