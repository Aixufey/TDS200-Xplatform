import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import React, { useEffect, useRef, useState } from 'react';
import { GestureResponderEvent, Image, Pressable, PressableProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Design } from '../../styles';
import { useFireBase } from '../../context/FireBaseContext';
import { useResizeImage, useUploadImageToFireBase, useUriToBlob } from '../../hooks';





const CameraItem: React.FC = () => {
    const [type, setType] = useState<CameraType>(CameraType.back);
    const [hasCameraPermission, setHasCameraPermission] = useState<any>();
    const [hasLibraryPermission, setHasLibraryPermission] = useState<any>();
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [photo, setPhoto] = useState<CameraCapturedPicture | undefined>(undefined);
    let cameraRef = useRef<Camera>(null);
    const { firebase_storage, firebase_app } = useFireBase();


    useEffect(() => {
        (async () => {
            const camPermission = await Camera.requestCameraPermissionsAsync();
            const libPermission = await MediaLibrary.requestPermissionsAsync();
            console.log(camPermission)
            console.log(libPermission)
            setHasCameraPermission(camPermission.status === 'granted');
            setHasLibraryPermission(libPermission.status === 'granted');
        })();

        return () => {
            // console.log(photo);
        }
    }, []);

    if (hasCameraPermission === undefined) {
        return <Text>Requesting permission..</Text>;
    } else if (!hasCameraPermission) {
        return <Text>Permission not granted</Text>
    }

    const handlePressTakePicture = async () => {
        try {
            if (cameraRef.current) {
                let options = {
                    quality: 0.5,
                    base64: true,
                    exif: true,
                    skipProcessing: true,
                };
                const photo = await cameraRef.current.takePictureAsync(options);
                const { uri, exif } = photo;
                // console.log(exif)
                // console.log(uri);
                setPhoto(photo);

                // Fetch blob from uri the normal way without reducing Image
                // const response = await fetch(uri);
                // const blob = await response.blob();

                // Reduce image size for Firebase
                const URI = await useResizeImage(uri);

                // Convert to binary large object
                let blob;
                if (URI != undefined) {
                    blob = await useUriToBlob(URI.uri)
                        .then(resp => {
                            return resp;
                        })
                    console.log(`Blob size: ${blob.size} - ${blob.type}`);
                }

                // Upload to Firebase
                if (blob != undefined)
                    await useUploadImageToFireBase(blob, exif);
            }
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <View style={styles.container}>
            <Camera
                ratio='1:1'
                style={styles.camera}
                ref={cameraRef}
                type={type}
                onCameraReady={() => console.log('Camera Ready')}
                onMountError={() => console.log('Camera Error')}
                onBarCodeScanned={() => console.log('Camera Scanned')}
            >
            </Camera>
            <View
                style={styles.buttonContainer}
            >
                <TouchableOpacity
                    style={Design.buttonTakePicture}
                    onPress={handlePressTakePicture}
                >
                </TouchableOpacity>
            </View>
            {
                photo && <View>
                    <Image source={{ uri: photo.uri }} style={{ width: 100, height: 100 }} />
                </View>
            }
        </View>
    )
}
export default CameraItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 5,
    },
    camera: {
        width: 350,
        height: 350,
    }

})
