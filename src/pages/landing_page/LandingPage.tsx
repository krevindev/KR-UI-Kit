import { useGlobalContext } from '../../hooks/GlobalContext';
import styles from './LandingPage.module.css';
import './LandingPage.css';
import FeaturesSection from './features_section/FeaturesSection';


const LandingPage: React.FC = () => {

    const { toggleTheme } = useGlobalContext();

    return (
        <div className={`${styles.landingPage} main-page`}>
            <FeaturesSection id='features-section' className='landing-section' />
        </div>
    )
}

export default LandingPage;