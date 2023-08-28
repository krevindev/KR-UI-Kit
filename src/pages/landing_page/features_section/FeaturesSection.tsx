import FeaturedContainer from '../../../components/featured_container/FeatureContainer';
import { moduleClasses } from '../../../custom_utils/UtilFunctions';
import RevealingText from '../../../featured_components/revealing_text/RevealingText';
import TypingEffect from '../../../featured_components/typing_effect/TypingEffect';
import RoleChanger from '../../../featured_components/role_change/RoleChanger';
import AlienBreach from '../../../featured_components/alien_breach/AlienBreach';
import styles from './FeaturesSection.module.css';
import { ReactNode } from 'react';

import gearIcon from '../../../res/icons/gear-icon.svg';
import Component5 from '../../../components/component5/Component5';

interface FeaturesSectionProps {
    id?: string,
    className?: string,
}

const Component5Data = [
    { iconSrc: gearIcon, title: 'Web Development' },
    { iconSrc: gearIcon, title: 'UI/UX Design' },
    { iconSrc: gearIcon, title: 'Web Scraping' },
    { iconSrc: gearIcon, title: 'Digital Arts' },
    { iconSrc: gearIcon, title: 'Other Services' },
]

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ id, className }) => {

    // merge the initially assigned className + module classNames + passed className
    const mergedClasses = 'landing-section ' + moduleClasses('features-section', styles);

    return (
        <div className={mergedClasses}>
            <div className='features'>
                <FeaturedContainer>
                    <RevealingText fillColor='var(--baseColor)' iterationCount={'infinite'} duration={2} timingFunction={'ease-in'}>
                        Revealing Text
                    </RevealingText>
                </FeaturedContainer>
                <FeaturedContainer>
                    <TypingEffect text='Typing Effect' speed={.05} infinite={true} />
                </FeaturedContainer>
                <FeaturedContainer>
                    <RoleChanger text='Role Changer: ' roles={['Designer', 'Developer']} />
                </FeaturedContainer>
                <FeaturedContainer>
                    <AlienBreach text='Breach Effect' speed={0.02} infinite={true} />
                </FeaturedContainer>

                <FeaturedContainer>
                    <Component5 data={Component5Data} />
                </FeaturedContainer>

                <div id='add-more'>
                    Constructing More
                    <img src={gearIcon} />
                </div>
            </div>
        </div >
    );
}

export default FeaturesSection;