import {useTheme} from "./providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {classNames} from "shared/lib/classNames";
import './styles/index.scss'

const App = () => {
    const {theme, toggleThem} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleThem}>Theme</button>
            <AppRouter/>
        </div>
    );
};

export default App;
