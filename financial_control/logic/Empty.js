// This function checks if any property in the given object is an empty string.
export default function Empty(object) {
    for (const key in object) {
        if (object[key].trim() === "") {
            return true    
        }
    }
    return false
}