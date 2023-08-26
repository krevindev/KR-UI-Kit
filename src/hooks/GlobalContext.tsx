import React, { createContext, useContext, ReactNode, useState } from "react";
import { Themes } from '../global_types/globalEnums';
import { useEffect } from 'react';


const GlobalContext = createContext<any>({});

// useTheme hook
export const useGlobalContext = () => {
    return useContext(GlobalContext);
}

interface ThemeProviderProps {
    children?: ReactNode
}

const GlobalProvider: React.FC<ThemeProviderProps> = ({ children }) => {

    const [theme, setTheme] = useState(Themes.light);
    const [isSplash, setIsSplash] = useState<boolean>(true);

    useEffect(() => {
        const splashTimeout = setTimeout(() => {
            setIsSplash(false);
        }, 1500);

        return () => clearTimeout(splashTimeout);
    });

    const toggleTheme = () => {
        setTheme(theme == Themes.light ? Themes.dark : Themes.light);
    };

    return (
        <GlobalContext.Provider value={{ theme, isSplash, toggleTheme }}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalProvider;