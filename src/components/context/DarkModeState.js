import { useEffect, useState } from "react";
import { DarkModeContext } from "./DarkModeContext";

const DarkModeState = (props) => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") !== null ? localStorage.getItem("darkMode") === "true" : false);
    const [page, setPage] = useState(localStorage.getItem("page") !== null ? parseInt(localStorage.getItem("page")) : 0);



    useEffect(() => {
        localStorage.setItem("darkMode", darkMode ? "true" : "false");
    }, [darkMode]);

    useEffect(() => {
        localStorage.setItem("page", page);
    }, [page]);

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode, page, setPage }}>
            {props.children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeState;