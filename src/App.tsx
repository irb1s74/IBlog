import React from 'react';
import {useTheme} from "./ theme/useTheme";
import {classNames} from "./helpers/classNames";

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
