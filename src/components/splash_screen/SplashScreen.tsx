import styles from './SplashScreen.module.css'

interface SplashScreenProps {
    name?: string
}

const SplashScreen: React.FC<SplashScreenProps> = () => {
    return (
        <div id="splash-screen" className={styles['splash-screen']}
        >
            <h1
                style={{
                    animationDuration: '1.5s'
                }}>KR</h1>
        </div>
    )
}


export default SplashScreen;