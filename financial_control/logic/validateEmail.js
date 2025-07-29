// This function validates if an email contains the '@' character
export default function validateEmail(email) {
    for (const letter of email) {
        if (letter === "@") {
            return true
        }
    }
    return false
}