import { useEffect, useState } from "react";


const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

interface AlienBreachProps {
    text: string,
    speed?: number,
    infinite?: boolean
}

const TimeSleep = async (pauseTime: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('test');
        }, 1000 * pauseTime);
    })
};


const AlienBreach: React.FC<AlienBreachProps> = ({ text, speed = 0.1, infinite = false }) => {

    const [currentText, setCurrentText] = useState<string>('');

    const runChecker: any = async () => {
        for (let inf = 0; inf < 1; infinite ? inf-- : inf++) {
            for (const textIndex in Array.from(text)) {

                // if the letter exists in alphabet array
                if (alphabet.includes(text[textIndex].toLowerCase())) {
                    for (const letter of alphabet) {

                        // gives a delay to show the effect
                        await TimeSleep(speed);

                        // set the current text to which letters have been scanned
                        setCurrentText(prevText => prevText.slice(0, -1) + letter);

                        // if the current iterated alphabet letter is equal to the current iterated text letter
                        if (text[textIndex].toLowerCase() == letter) {
                            setCurrentText(text.substring(0, parseInt(textIndex) + 1));
                            break;
                        }
                    }
                } else {
                    await TimeSleep(speed);
                    setCurrentText(text.substring(0, parseInt(textIndex) + 1));
                }
            }
        }
    }

    useEffect(() => {
        runChecker();
    }, []);

    return (
        <div className="alien-breach">
            <h1>
                {currentText}
            </h1>
        </div>
    )
}

export default AlienBreach;