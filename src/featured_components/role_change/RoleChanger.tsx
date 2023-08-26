import styles from './RoleChanger.module.css';
import { useEffect, useState } from "react";

interface RoleChangerProps {
    text: string,
    roles: string[],
    className?: string,
    id?: string,
    speed?: number
}
function Roe<RoleChangerProps>() {

}

const RoleChanger: React.FC<RoleChangerProps> = ({ text, roles, className, id, speed }) => {

    const [activeRoleIndex, setActiveRoleIndex] = useState<number>(0);

    useEffect(() => {
        // role changes in 1 second interval by changing the activeRoleIndex
        const changeRoleInterval = setInterval(() => {
            setActiveRoleIndex(prevIndex => prevIndex + 1);
        }, 1000 * (speed ? speed : 1));

        return () => clearInterval(changeRoleInterval);
    }, []);

    // if the activeRoleIndex is overlapped change back to zero
    useEffect(() => {
        if (activeRoleIndex >= roles.length) {
            setActiveRoleIndex(0);
        }
    }, [activeRoleIndex]);

    // manage classnames for roles
    const classNames = (role: string) => {
        // if the role is active add "in" class and "out" otherwise
        return `${styles.role} ${styles[roles.indexOf(role) == activeRoleIndex ? 'in' : 'out']} role`;
    }

    return (
        <div id={id} className={styles['role-changer-component'] + " " + className}>
            <span className={styles['role-text']}>{text}
            </span>
            <div className={styles['role-container'] + " " + className}>
                {
                    roles.map(role =>
                        (<span className={classNames(role)}>{role}</span>)
                    )
                }
            </div>
        </div>
    )
}

export default RoleChanger;