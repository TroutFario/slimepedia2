import { useState, useEffect } from 'react';

const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const documentChangeHandler = () => setMatches(mediaQueryList.matches);

        // Initial check
        setMatches(mediaQueryList.matches);

        // Add listener
        mediaQueryList.addEventListener('change', documentChangeHandler);

        // Cleanup listener on unmount
        return () => {
            mediaQueryList.removeEventListener('change', documentChangeHandler);
        };
    }, [query]);

    return matches;
};

export default useMediaQuery;