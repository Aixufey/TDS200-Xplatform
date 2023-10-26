import { useEffect, useState } from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFireBase } from '../../context/FireBaseContext';
import { Design } from '../../styles';
import CameraScreen from '../CameraScreen';
import { Query, QuerySnapshot, addDoc, collection, onSnapshot } from 'firebase/firestore';


type ScreenProps = {
    pageName: string
}
const WelcomeScreen: React.FC<ScreenProps> = ({ pageName }) => {
    // Navigate without library
    const [currentPage, setCurrentPage] = useState<string>('WelcomeScreen');
    const [willUnmount, setWillUnmount] = useState<boolean>(false);
    const { firebase_app, firebase_db, firebase_storage } = useFireBase();
    const [data, setData] = useState<unknown[]>([]);



    const handleMount = (unmount: boolean) => {
        // console.log('Children sent state back: ', unmount);
        // console.log('CurrentPage is ', currentPage);
        unmount && setWillUnmount(unmount);
    }

    const navigateCameraScreen = (event: GestureResponderEvent) => {
        console.log('clicked', currentPage)
        setCurrentPage('CameraScreen');
        // Reset state after navigating.
        setWillUnmount(false);
    }
    
    const addToFireBase = async () => {
        const doc = addDoc(collection(firebase_db, 'pic'), { title: 'test' })
        console.log(doc)
    }
    useEffect(() => {
        // This demonstrate clean-up subscribe to changes
        const picRef = collection(firebase_db, 'pic');
        const subscriber = onSnapshot(picRef, {
            next: (snapshot: QuerySnapshot) => {
                const pics: any[] = [];
                snapshot.forEach((doc) => {
                    // console.log(doc.data());
                    pics.push({
                        id: doc.id,
                        ...doc.data()
                    })
                }) 
                setData(pics);
            }
        })
        return () => {
            subscriber();
            console.log(data)
        }
    }, [])

    useEffect(() => {
        return console.log(currentPage)
    }, [currentPage])

    return (
        // The Camera Screen will only be displayed if currentPage is 'CameraScreen AND willUnmount is false.
        // This example shows 2 condition has to be true -- this however can be simplified using either.
        // If using setCurrentPage, CameraScreen is accepting pageName and setCurrentPage as prop from this.
        // If using boolean, the onMount is a handler -- inside CameraScreen we can alter the state to true.
        // This way CameraScreen can be removed from hierarchy.
        <View style={styles.container}>
            {currentPage === 'CameraScreen' && willUnmount === false &&
                <CameraScreen
                    pageName={'WelcomeScreen'}
                    onMount={handleMount}
                    setCurrentPage={setCurrentPage}
                />
            }

            {currentPage === 'WelcomeScreen' &&
                <>
                    <TouchableOpacity
                        onPress={navigateCameraScreen}
                        style={Design.buttonPrimary}
                    >
                        <Text style={Design.textWhite}>
                            Go to Camera Screen
                        </Text>
                    </TouchableOpacity>

                    <Pressable
                    onPress={() => addToFireBase()}
                    
                    >
                        <Text>Add</Text>
                    </Pressable>
                </>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'gold',
        borderWidth: 5,
        width: `100%`,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 25,
    }
})
export default WelcomeScreen