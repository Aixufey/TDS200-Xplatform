import { useState, useRef, useEffect } from "react";
import {
    TextInput,
    View,
    Text,
    StyleSheet,
    Pressable,
    Platform,
    NativeSyntheticEvent,
    TextInputChangeEventData,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Crypto from 'expo-crypto';





interface IStickyItem {
    id: string;
    title?: string;
    content?: string;
    children?: React.ReactNode;
}
type StickyItemJSON = {
    id: string;
    title?: string;
    content?: string;
}
const StickyItem: React.FC<IStickyItem> = ({ id, title, content }) => {
    // const [title, setTitle] = useState<string>("")
    // const [note, setNote] = useState<string>("")
    const [nil, setClose] = useState<boolean>(true)
    const [_title, _setTitle] = useState<string>("")
    const [_content, _setContent] = useState<string>("")
    const [json, setJSON] = useState<StickyItemJSON[]>([]);

    useEffect(() => {

        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('note-data');
                if (jsonValue !== undefined && jsonValue !== null) {
                    //console.log(JSON.parse(jsonValue));
                    return JSON.parse(jsonValue);
                }
            } catch (err: unknown) {
                console.error("Couldn't read data: ", err);
            };
        };
        getData()
            .then((data) => {
                _setTitle(data?.title);
                _setContent(data?.content);
            })
            .catch((err) => console.error(err));
    }, []);


    useEffect(() => {
        console.log(json)
        console.log(json.length)
        const handleJSONUpdate = () => {
            setJSON((prevData) => [
                ...prevData,
                {
                    id: new Date().getTime().toString(),
                    title: _title,
                    content: _content
                }
            ]
            );
        };

        const storeData = async (value: StickyItemJSON[]) => {
            try {
                await AsyncStorage.setItem('note-data', JSON.stringify(value));
            } catch (err: unknown) {
                console.error("Couldn't save data: ", err);
            }
        };

        handleJSONUpdate();

        if (json !== null && json !== undefined) {
            storeData(json);
        };

    }, [_title, _content]);




    return (
        <>
            {nil &&
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Pressable
                            onPress={() => setClose(false)}
                        >
                            <Text style={styles.close}>CLOSE</Text>
                        </Pressable>
                    </View>
                    {/* Title */}
                    <TextInput
                        style={Platform.OS === 'web' ? styles.titleInputWeb : styles.titleInput}
                        multiline={false}
                        placeholder={'Title..'}
                        placeholderTextColor={'#808080'}
                        onChangeText={(txt) => title ?? txt}
                        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => _setTitle(e.nativeEvent.text)}
                        autoCorrect={false}
                        value={_title}
                    />
                    {/* Note */}
                    <TextInput
                        style={Platform.OS === 'web' ? styles.noteInputWeb : styles.noteInput}
                        multiline={true}
                        placeholder={'Set a note..'}
                        placeholderTextColor={'#808080'}
                        onChangeText={(txt) => content ?? txt}
                        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => _setContent(e.nativeEvent.text)}
                        autoCorrect={false}
                        value={_content}
                    />
                </View>
            }
        </>
    )
}

export default StickyItem;


const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        paddingTop: 5,
        paddingHorizontal: 8,
        backgroundColor: "#FFD700",
        borderRadius: 10,
        shadowRadius: 16,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "#696969",
    }, header: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
    }, close: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    titleInputWeb: {
        paddingTop: 10,
        fontSize: 16,
        fontFamily: "sans-serif",
        fontWeight: "bold",
        width: "100%",
        outlineStyle: 'none',
    },
    titleInput: {
        paddingTop: 10,
        fontSize: 16,
        fontFamily: "sans-serif",
        fontWeight: "bold",
        width: "100%",
    },
    noteInputWeb: {
        marginTop: 15,
        fontSize: 14,
        fontFamily: "sans-serif",
        width: "100%", // Make the note input full width
        height: "100%", // Make the note input full height
        outlineStyle: 'none',
        scrollbarWidth: 'none',
    },
    noteInput: {
        marginTop: 15,
        fontSize: 14,
        fontFamily: "sans-serif",
        width: "100%", // Make the note input full width
        height: "100%", // Make the note input full height
    },
})