import {useState} from 'react';

const Accordion = ({title, children, defaultOpen = false}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="accordion-item">
            <div className="accordion-header" onClick={()=>setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`} />
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Accordion;