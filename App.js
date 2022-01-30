import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';

export default function App() {

    const [mainContent, setMainContent] = useState([])
    const phrases = [
        "Hey, you know that bubble had a family",
        "You happy now? No more bubble.  Game's over.  Go home.",
        "oh my god, you killed him",
        "Bubble's dead now. Bet you're real proud of yourself champ",
        "Bubble popped. Now go outside and play",
        "BUBBLE BUDDY NO!!!!",
        "You really blew it, now you have no bubble",
        "BUBBLE DELETED",
        "Gone before his time",
        "What, do you hate bubbles or something?",
        "You did this."
    ]

    let copyPhrases = [...phrases]

    const StartScreen = () => {
        setMainContent(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "dodgerblue"}}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Bubble Pop</Text>
                </View>
                <TouchableOpacity style={styles.startButton} onPress={renderBubbleScreen}>
                    <Text style={styles.startButtonText}>Start Game</Text>
                </TouchableOpacity>

            </View>
        )
    }


    const renderBubbleScreen = () => {
        setMainContent(
            <View style={styles.container}>
                <TouchableOpacity onPress={bubblePop}>
                    <Bubble></Bubble>
                </TouchableOpacity>
            </View>

        )
    }

    const bubblePop = () => {
        let selectedPhrase = ""

        if (copyPhrases.length > 0) {
            let randomIndex = Math.floor(Math.random()*copyPhrases.length)
            selectedPhrase = copyPhrases[randomIndex]
            copyPhrases.splice(randomIndex, 1)
        }

        else {
            copyPhrases = [...phrases]
            let randomIndex = Math.floor(Math.random()*copyPhrases.length)
            selectedPhrase = copyPhrases[randomIndex]
            copyPhrases.splice(randomIndex, 1)
        }

        setMainContent(
            <View style={styles.container}>
                <TouchableOpacity onPress={bubblePop}>
                    <Text style={{width: '75%', alignSelf: 'center', textAlign: 'center', fontSize: 20}}>{selectedPhrase}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.anotherBubble} onPress={renderBubbleScreen}>
                    <Text style={{fontSize: 15, color: 'white'}}>Get another bubble</Text>
                </TouchableOpacity>
                
            </View>
        )
    }

    useEffect(() => { 
        StartScreen()
    }, []);

    return (
        <View style={{flex: 1}}>
            {mainContent}
        </View>

    );
}

export function Bubble() {
    return (
        <View style={styles.bubble}>
            <View style={styles.bubbleInsetShadow}></View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center',
    },

    bubble: {
        height: 100,
        width: 100,
        borderWidth: 5,
        borderColor: 'lightblue',
        backgroundColor: 'lightblue',
        borderRadius: '50%',
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },

    bubbleInsetShadow: {
        height: 95,
        width: 95,
        opacity: 1,
        borderRadius: '50%',
        backgroundColor: 'lightblue',
        shadowColor: 'white',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 2,
        zIndex: 5
    },

    titleContainer: {
        height: 100,
        width: '85%',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        alignItems: 'center',
        shadowColor: 'white',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 1000,
        borderRadius: 15,
        marginBottom: 100

    },

    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'lightblue'
    },

    startButton: {
        height: 100,
        width: '85%',
        justifyContent: 'center',
        backgroundColor: 'lightyellow',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        borderRadius: 15,
    },

    startButtonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },

    anotherBubble: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '50%',
        marginTop: 50,
        borderRadius: 20,
        backgroundColor: 'purple'
    }

});
