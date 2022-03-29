import { createContext, useReducer } from "react";
import { IThemeProps, IThemeState } from "./types";

export interface IAction {
    type?: string;
}

const initialState: IThemeState = {
  selectedTheme: 'theme-dark',
};

const themeReducer = (state: IThemeState, action: IAction) => {
    switch (action.type) {
        case "LIGHTMODE":
            return { selectedTheme: 'theme-light' };
        case "DARKMODE":
            return { selectedTheme: 'theme-dark' };
        default:
            return state;
    }
};

export const ThemeContext = createContext({state: {}, dispatch: {}});

export function ThemeProvider(props: IThemeProps) {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>;
}
