import {Suspense, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Sidebar} from 'widgets/Sidebar';
import {Navbar} from 'widgets/Navbar';
import {AppRouter} from 'app/providers/router';
import {useTheme} from './providers/ThemeProvider';
import {Button} from "shared/ui/Button/Button";
import {Modal} from "shared/ui/Modal/Modal";
import './styles/index.scss';

function App() {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
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
