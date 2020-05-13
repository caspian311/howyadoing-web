class AuthService {
    setSession(token) {
        localStorage.setItem("authToken", token);
    }

    fetchSession() {
        return localStorage.getItem("authToken");
    }
}

module.exports = AuthService