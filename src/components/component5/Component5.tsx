import { useState } from 'react';
import styles from './Component5.module.css';

type Component5Data = { iconSrc: string, title: string }

interface Component5Props {
    data: Component5Data[]
}

const Component5: React.FC<Component5Props> = ({ data }) => {

    return (
        <div className={styles['component-5']}>
            {
                data.map(c5Item => (
                    <div className={styles['c5-item']}>
                        <div className={styles['c5-collapsed-title']}>
                            <img src={c5Item.iconSrc} />
                            <span>{c5Item.title}</span>
                        </div>
                        <h5>{c5Item.title}</h5>
                    </div>
                ))
            }
        </div>
    );
}

export default Component5;