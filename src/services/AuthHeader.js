

export default function AuthHeader() {
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(token)
    if(token) {
        return { Authorization:  token };
    } else {
        return {};
    }
}