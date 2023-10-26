/**
 * Helper: Expecting an uri that converts to a Blob.
 * @param uri
 * @returns Promise of type Blob
 */
const useUriToBlob = (uri: string): Promise<Blob> => {
    return new Promise<Blob>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            resolve(xhr.response);
        };

        xhr.onerror = () => {
            reject(new Error("uriToBlob failed"));
        };

        xhr.responseType = "blob";

        xhr.open("GET", uri, true);
        xhr.send(null);
    });
};
export default useUriToBlob;