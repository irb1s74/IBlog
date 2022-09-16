import {useTheme} from "./providers/ThemeProvider";
import './styles/index.scss'

const App = () => {
    const {theme, toggleThem} = useTheme()
    return (
        <div className={`app ${theme}`}>
            TExt
            <button onClick={toggleThem}>Theme</button>
        </div>
    );
};

export default App;
