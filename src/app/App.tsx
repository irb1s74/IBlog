import { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';

function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <div className="flex">
                    <Sidebar />
                    <div className="flex-grow">
                        <Navbar />
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    );
}

export default App;
