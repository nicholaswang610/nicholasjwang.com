import React, {useState, useEffect, useRef} from 'react';
import './Fade.css';

const FadeSectionUp = props => {
    const [visible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(domRef.current);
                }
            });
        });
        observer.observe(domRef.current);
    }, [])
    
    return (
        <div className={`fade-section-in ${visible ? 'visible' : ''} `} ref={domRef}>
            {props.children}
        </div>
    )
}

export default FadeSectionUp;