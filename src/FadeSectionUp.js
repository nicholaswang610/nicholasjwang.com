import React, {useState, useEffect, useRef} from 'react';
import './styles/Fade.css';
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
        <div className={`fade-section-up ${visible ? 'visible ' + props.project : ''} `} ref={domRef}>
            {props.children}
        </div>
    )
}

export default FadeSectionUp;