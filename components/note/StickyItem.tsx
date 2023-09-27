import { useState } from "react";
import { TextInput, View, Text, StyleSheet, Pressable, Platform } from "react-native";






interface IStickyItem {
    title?: string;
    content?: string;
    children?: React.ReactNode;
}
const StickyItem: React.FC<IStickyItem> = ({ title, content }) => {
    // const [title, setTitle] = useState<string>("")
    // const [note, setNote] = useState<string>("")
    const [nil, setClose] = useState<boolean>(true)


    return (
        <>
            {nil &&
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Pressable
                            onPress={() => setClose(false)}
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
                        onChangeText={(txt) => title ?? txt}
                        autoCorrect={false}
                        value={title}
                    />
                    {/* Note */}
                    <TextInput
                        style={Platform.OS === 'web' ? styles.noteInputWeb : styles.noteInput}
                        multiline={true}
                        placeholder={'Set a note..'}
                        placeholderTextColor={'#808080'}
                        onChangeText={(txt) => content ?? txt}
                        autoCorrect={false}
                        value={content}
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