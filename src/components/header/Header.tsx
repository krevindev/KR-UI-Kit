import { useGlobalContext } from '../../hooks/GlobalContext';
import styles from './Header.module.css';

const Header = () => {

    const { isSplash } = useGlobalContext();

    // don't render if it's still splash
    if (isSplash) {
        return null;
    } else {
        return (
            <div id='header' className={styles.header}>
                <h1>KR Components</h1>
            </div>
        );
    }
}

export default Header;