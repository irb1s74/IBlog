import {useTheme} from "./providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {classNames} from "shared/lib/classNames";
import './styles/index.scss'
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleThem} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={toggleThem}>Theme</button>
            <AppRouter/>
        </div>
    );
};

export default App;
