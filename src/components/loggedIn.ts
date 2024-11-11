export default function loggedIn() {
    return sessionStorage.getItem("loggedIn") === "true";
}
