import React, { useEffect } from 'react';
import { Slime } from './text/slimes.js';
import Routes from './routes/index.jsx';
import 'overlayscrollbars/overlayscrollbars.css';
import './css/App.css';

export function getEnumValue<T extends object>(enumObject: T, element: string | undefined): T[keyof T] | null {
    if (!element) {
        return null;
    }
    return Object.values(enumObject).find((value) => value === element) ?? null;
}

function App() {
    document.title = "Slimepedia 2";

    useEffect(() => {
        const crypto = window.crypto || window.Crypto;
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        const randomSlimeKey = Object.values(Slime)[array[0] % Object.keys(Slime).length];
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon)
            (favicon as HTMLLinkElement).href = `/assets/slimes/${randomSlimeKey}.png`;
    }, []);

    return (
        <div className="slimepedia-app">
            <Routes />
        </div>
    );
}

export default App;