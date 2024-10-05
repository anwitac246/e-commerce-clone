import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimationComponent = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.1 
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true); 
                } else {
                    setIsVisible(false); 
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        
        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={componentRef}
            className={`component ${isVisible ? 'visible' : ''}`}
        >
            {children}
        </div>
    );
};

export default ScrollAnimationComponent;
