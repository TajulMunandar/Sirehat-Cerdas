import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useInViewAnimation = (triggerOnce = true, rootMargin = "-100px 0px") => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce,
        rootMargin,
    });
    const animation = useRef(false);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
            animation.current = true;
        } else {
            if (animation.current) {
                controls.start("hidden");
                animation.current = false;
            }
        }
    }, [controls, inView]);

    return [ref, controls];
};

export default useInViewAnimation;
