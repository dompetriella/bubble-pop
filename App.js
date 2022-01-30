import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

    const [mainContent, setMainContent] = useState([])

    const StartScreen = () => {
        setMainContent(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "dodgerblue"}}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Bubble Pop</Text>
                </View>
                <View style={styles.startButton}>
                    <Text style={styles.startButtonText}>Start Game</Text>
                </View>
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
    }

});
