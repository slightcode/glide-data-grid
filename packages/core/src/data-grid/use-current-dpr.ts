import React from "react";

/**
 * Returns the current device pixel ratio.
 */
export const useCurrentDpr = () => {
    const [dpr, setDpr] = React.useState(typeof window !== "undefined" ? window.devicePixelRatio : 1);

    React.useEffect(() => {
        let active = true;

        const updatePixelRatio = () => {
            if (active) {
                const pr = window.devicePixelRatio;
                setDpr(pr);
                matchMedia(`(resolution: ${pr}dppx)`).addEventListener("change", updatePixelRatio, { once: true });
            }
        };

        updatePixelRatio();

        return () => {
            active = false;
        };
    }, []);

    return dpr;
};
