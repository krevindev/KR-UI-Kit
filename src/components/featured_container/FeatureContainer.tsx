import './FeatureContainer.css';
import { ReactNode } from 'react';

interface FeatureContainerProps {
    children?: ReactNode,
    className?: string,
    id?: string
}

const FeatureContainer: React.FC<FeatureContainerProps> = ({ children, className, id }) => {
    return (
        <div id={id} className={"featured-container "+className}>
            {children}
        </div>
    );
}

export default FeatureContainer;