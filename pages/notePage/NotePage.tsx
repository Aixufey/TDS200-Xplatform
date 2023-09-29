import React, { useEffect, useState } from "react";
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

    const [data, setData] = useState<dummyType[]>(dummy);
    const [persist, setPersist] = useState<StickyItemJSON[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await useGetDataAsync();
                console.log('from storage ', result)
                if (result !== undefined && result !== null) {
                    setPersist([result]);
                } else {
                    setPersist([]);
                }
            } catch (err) {
                console.error(err);
            };
        };

        fetchData();
        return () => { };
    }, []);

    const handleAddNote = () => {
        // const newNote: dummyType =
        //     { id: Crypto.randomUUID().slice(4) }
        let newNote: StickyItemJSON = {
            id: new Date().getTime().toString(),
            title: "",
            content: "",
        };
        setPersist([...persist, newNote])
    }

    const handleDeleteAll = () => {
        AsyncStorage.clear();
        setPersist([]);
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={persist}
                keyExtractor={(key, index) => { return key.id }}
                renderItem={({ item }) => (
                    <StickyItem
                        id={item.id}
                        key={Crypto.randomUUID()}
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
        </SafeAreaView>
    )
}

export default NotePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "linen"
    },
    flatListContainer: {
        gap: 10,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "center",
    },
    btnContainer: {
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',

    }
});