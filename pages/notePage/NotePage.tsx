import React, { SetStateAction, useEffect, useState } from "react";
import { StickyItem } from "../../components/note";
import { FlatList, View, Text, StyleSheet, Pressable, Button, SafeAreaView } from "react-native";
import * as Crypto from 'expo-crypto';
import useGetDataAsync from "../../hooks/useGetDataAsync";
import AsyncStorage from "@react-native-async-storage/async-storage";


type dummyType = {
    id: string;
    title?: string;
    content?: string;
}
type StickyItemJSON = {
    id: string;
    title?: string;
    content?: string;
}
const NotePage = () => {
    let dummy: dummyType[] = [
        { id: Crypto.randomUUID().slice(4) },
        { id: Crypto.randomUUID().slice(4) },
        { id: Crypto.randomUUID().slice(4) },
        { id: Crypto.randomUUID().slice(4) },
    ]
    const [data, setData] = useState<StickyItemJSON[] | dummyType[]>(dummy);

    /**
     * Data loads
     */
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await AsyncStorage.getItem('note-data');
                if (data !== null) {
                    const parsed: StickyItemJSON[] = JSON.parse(data);
                    setData(parsed);
                } else setData(dummy);
            } catch (err) {
                console.error("Failed to load data", err);
            }
        };
        loadData();
    }, [])

    /**
     * Handler will be passed into StickyItem to extract states. The textinput are encapsulated.
     * @param id - Will be passed when rendering in Flatlist
     * @param title 
     * @param content 
     */
    const handleEdit = async (id: string, title?: string, content?: string) => {
        const updatedData = data.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    title: title,
                    content: content
                };
            }
            return item;
        });
        setData(updatedData);
        await AsyncStorage.setItem('note-data', JSON.stringify(updatedData));
    }

    const handleDelete = async (id: string) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
        await AsyncStorage.setItem('note-data', JSON.stringify(updatedData));
    }

    const handleAddNote = async () => {
        // const newNote: dummyType =
        //     { id: Crypto.randomUUID().slice(4) }
        let newNote: StickyItemJSON = {
            id: new Date().getTime().toString(),
            title: "",
            content: "",
        };
        const updatedData = [...data, newNote];
        setData(updatedData);
        try {
            await AsyncStorage.setItem('note-data', JSON.stringify(updatedData));
        } catch (err) {
            console.error("Failed to add note", err);
        }
    }

    const handleDeleteAll = () => {
        AsyncStorage.clear();
        setData([]);
    }


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(key, index) => { return key.id }}
                renderItem={({ item }) => (
                    <StickyItem
                        id={item.id}
                        title={item.title}
                        content={item.content}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                )}
                contentContainerStyle={styles.flatListContainer}
            />
            <View style={styles.btnContainer}>
                <Pressable
                    onPress={handleAddNote}
                    style={{
                        width: 100,
                        height: 60,
                        backgroundColor: 'green',
                        borderRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}

                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </Pressable>

                {/* Delte */}
                <Pressable
                    onPress={handleDeleteAll}
                    style={{
                        width: 100,
                        height: 60,
                        backgroundColor: 'red',
                        borderRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}

                >
                    <Text style={styles.buttonText}>
                        Wipe
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default NotePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "linen",
    },
    flatListContainer: {
        gap: 10,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "center",
    },
    btnContainer: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'gold',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
    }
});