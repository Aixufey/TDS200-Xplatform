import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

/**
     * Helper: Expecting a binary large object and upload to fire storage
     * @param blob 
     */
const useUploadImageToFireBase = async (blob: Blob, exif?: Partial<MediaTrackSettings> | any) => {
    try {
        const storage = await getStorage();
        const picturesRef = await ref(storage, 'pictures/image.jpg');
        uploadBytesResumable(picturesRef, blob, {
            contentType: 'image/jpeg',
            customMetadata: {
                exif: JSON.stringify(exif??'')
            }
        }).then(async (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Uploaded Blob -- ${progress}% done!`);

            const downloadURL = await getDownloadURL(picturesRef);
            console.log(`Download URL: ${downloadURL}`)
        }).catch((err) => {
            console.error('Error', err);
        })
    } catch (err) {
        console.log(err);
    }
};
export default useUploadImageToFireBase;