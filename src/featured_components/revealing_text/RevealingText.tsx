import styles from './RevealingText.module.css';
import './RevealingText.css';
import { ReactNode } from 'react';

interface RevealingTextProps {
    children: ReactNode,
    id?: string,
    className?: string,
    bgColor?: string,
    fillColor?: string,
    textColor?: string,
    delay?: number,
    iterationCount?: string,
    duration?: number,
    timingFunction?: string
}

const RevealingText: React.FC<RevealingTextProps> = (props) => {
    // const d = { id, className, fillColor = 'red', textColor = 'black', bgColor = 'none', children, delay, iterationCount, duration };


    const classNamesArray: string[] = props.className ? props.className.split(' ') : [];
    classNamesArray.push('revealing-text');
    const classNames = classNamesArray.toString().replaceAll(',', ' ');

    return (
        <div id={props.id} className={classNames} style={{ backgroundColor: props.bgColor }}>
            <span style={{ color: props.textColor }}>
                {
                    props.children
                }
            </span>
            <div className={styles.cover}
                style={{
                    background: props.fillColor,
                    animationDelay: props.delay + 's',
                    animationDuration: props.duration ? props.duration + 's' : '.6s',
                    animationIterationCount: props.iterationCount ? props.iterationCount : '',
                    animationTimingFunction: props.timingFunction
                }} />
        </div >
    )
}

export default RevealingText;