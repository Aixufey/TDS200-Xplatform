import React, { useEffect, useState } from "react";
import { StickyItem } from "../../components/note";
import { FlatList, View, Text, StyleSheet, Pressable, Button } from "react-native";
import * as Crypto from 'expo-crypto';


type dummyType = {
    id: string;
    title?: string;
    content?: string;
}
const NotePage = () => {
    let dummy: dummyType[] = [
        { id: Crypto.randomUUID().slice(4) },
        { id: Crypto.randomUUID().slice(4) },
        { id: Crypto.randomUUID().slice(4) },
    ]

    const [data, setData] = useState<dummyType[]>(dummy);


    const handleAddNote = () => {
        const newNote: dummyType =
            { id: Crypto.randomUUID().slice(4) }
        setData([...data, newNote])
    }

    const handleDeleteAll = () => {
        setData([]);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <StickyItem
                        title={item.title}
                        content={item.content}
                    />
                )}
                contentContainerStyle={styles.flatListContainer}
            />
            <View style={styles.btnContainer}>
                <Pressable
                    onPress={handleAddNote}
                    style={{
                        maxWidth: 150,
                        minWidth: 80,
                        maxHeight: 60,
                        backgroundColor: 'lightblue',
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}

                >
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 30,
                        height: '100%',
                    }}>
                        +
                    </Text>
                </Pressable>

                {/* Delte */}
                <Pressable
                    onPress={handleDeleteAll}
                    style={{
                        maxWidth: 150,
                        minWidth: 80,
                        maxHeight: 60,
                        backgroundColor: 'red',
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}

                >
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 30,
                        height: '100%',
                    }}>
                        Wipe
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default NotePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "linen"
    },
    flatListContainer: {
        flex: 1,
        gap: 10,
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
    },
    btnContainer: {
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',

    }
});