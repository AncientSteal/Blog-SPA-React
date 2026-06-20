import { useLenis } from "lenis/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop () {
    const pathName = useLocation();
    const lenis = useLenis();

    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, {immediate: true});
        }
    }, [pathName, lenis]);

    return null;
}