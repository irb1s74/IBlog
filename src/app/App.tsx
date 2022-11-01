import {Suspense, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Sidebar} from 'widgets/Sidebar';
import {Navbar} from 'widgets/Navbar';
import {AppRouter} from 'app/providers/router';
import {useTheme} from './providers/ThemeProvider';
import 'app/styles/index.scss';
import {useDispatch} from "react-redux";
import {userActions} from "entities/User";

function App() {
    const {theme} = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initialAuthData())
    }, [dispatch])

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
