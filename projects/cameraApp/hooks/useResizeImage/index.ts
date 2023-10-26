import {
    ImageResult,
    SaveFormat,
    manipulateAsync,
} from "expo-image-manipulator";

/**
 * Helper: Expecting an uri then compress the image using expo-image-manipulator API.
 * @param uri
 */
const useResizeImage = async (uri: string): Promise<ImageResult> => {
    const result = await manipulateAsync(
        uri,
        [{ resize: { width: 800, height: 800 } }],
        {
            compress: 0.5,
            format: SaveFormat.JPEG,
            base64: true,
        }
    );
    // console.log(result)
    return result;
};
export default useResizeImage;
