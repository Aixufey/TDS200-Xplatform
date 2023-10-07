import { useState, useRef, useEffect, SetStateAction } from "react";
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
    onEdit?: (id: string, title?: string, content?: string) => void;
    onDelete?: (id: string) => void;
}

const StickyItem: React.FC<IStickyItem> = ({ id, title, content, onEdit, onDelete }) => {
    const [nil, setClose] = useState<boolean>(true);
    const [_title, _setTitle] = useState<string>(title || "");
    const [_content, _setContent] = useState<string>(content || "");


    /**
     * onEdit setter from NotePage we send the updated changes back.
     */
    const handleInputChange = (field: 'title' | 'content', e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const newValue = e.nativeEvent.text;
        if (onEdit) {
            if (field === 'title') {
                _setTitle(newValue);
                onEdit(id, newValue, content);
            } else if (field === 'content') {
                _setContent(newValue);
                onEdit(id, title, newValue)
            }
        }
    }

    /**
     * onDelete setter from NotePage
     * @param id being sent from Flatlist
     */
    const handleDelete = (id: string) => {
        if (onDelete) {
            onDelete(id);
        }
    }


    return (
        <>
            {nil &&
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Pressable
                            onPress={() => {
                                handleDelete(id)
                                setClose(false)
                            }}
                        >
                            <Text style={styles.close}>X</Text>
                        </Pressable>
                    </View>
                    {/* Title */}
                    <TextInput
                        style={Platform.OS === 'web' ? styles.titleInputWeb : styles.titleInput}
                        multiline={false}
                        placeholder={'Title..'}
                        placeholderTextColor={'#808080'}
                        // onChangeText={(txt) => title ?? txt}
                        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => handleInputChange('title', e)}
                        autoCorrect={false}
                        value={_title}
                    />
                    {/* Note */}
                    <TextInput
                        style={Platform.OS === 'web' ? styles.noteInputWeb : styles.noteInput}
                        multiline={true}
                        placeholder={'Set a note..'}
                        placeholderTextColor={'#808080'}
                        // onChangeText={(txt) => content ?? txt}
                        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => handleInputChange('content', e)}
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
        color: '#D32F2F',
        margin: 5
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