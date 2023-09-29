import AsyncStorage from "@react-native-async-storage/async-storage";





type StickyItemJSON = {
    id: string;
    title?: string;
    content?: string;
}
enum StorageKeys { 
    noteData = "note-data",
}
const useGetDataAsync = async (): Promise<StickyItemJSON | undefined> =>  {
    try {
        const jsonValue = await AsyncStorage.getItem(StorageKeys.noteData);
        if (jsonValue !== undefined && jsonValue !== null) {
            // console.log(JSON.parse(jsonValue));
            return JSON.parse(jsonValue);
        }
    } catch (err: unknown) {
        console.error("Couldn't read data: ", err);
    }
};
export default useGetDataAsync;