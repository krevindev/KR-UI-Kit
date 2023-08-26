import { ReactNode, useEffect, useState } from 'react';
import styles from './TypingEffect.module.css';

interface TypingEffectProps {
    text: string,
    speed?: number,
    className?: string | undefined,
    infinite?: boolean
};



const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed, className, infinite = false }) => {

    const [currentText, setCurrentText] = useState<string>('');

    const classes = `${styles['typing-text']} ${className != undefined ? className : ''}`;

    useEffect(() => {
        let ind: number = 1;
        const typingInterval = setInterval(() => {

            setCurrentText(text.substring(0, ind));
            ind++;

            if (ind > text.length) {
                if (infinite) {
                    ind = 1
                } else {
                    clearInterval(typingInterval);
                }
            }

        }, 1000 * (speed ? speed : .2));

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className={classes}>
            <p className='typing-effect-text'>
                {currentText}
            </p>
        </div>
    )
}

export default TypingEffect;