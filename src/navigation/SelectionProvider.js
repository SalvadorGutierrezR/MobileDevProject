import React, { createContext, useState } from "react";

export const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {

    const [loaders, setLoaders] = useState({
        property: null,
        items: null,
        workers: null,
        saved: null
    });

    const [selections, setSelections] = useState({
        property: null,
        items: {},
        worker: null,
        client: null,
        email: null,
    });

    return(
        <SelectionContext.Provider
            value={{
                loaders,
                selections,
                setLoaders,
                setSelections
            }}
        >
            {children}
        </SelectionContext.Provider>
    )
}