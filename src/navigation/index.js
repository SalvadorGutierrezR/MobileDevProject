import React from "react";
import { AuthProvider } from "./AuthProvider";
import Routes from "./Routes";
import { SelectionProvider } from "./SelectionProvider";

const Providers = () => {
    return (
        <AuthProvider>
            <SelectionProvider>
                <Routes/>   
            </SelectionProvider>
        </AuthProvider>
    );
}

export default Providers;