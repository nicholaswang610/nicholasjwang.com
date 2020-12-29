import React, {useState, useEffect, useRef} from 'react';
import './Fade.css';
const FadeSectionIn = props => {
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
        <div className={`fade-section-up ${visible ? 'visible' : ''} `} ref={domRef}>
            {props.children}
        </div>
    )
}

export default FadeSectionIn;