
let user = {
    firstName: '',
    lastName: '',
}

class AuthApi {
    static getUserData() {
        return new Promise((resolve, reject) => {
            if (user.firstName === '' || user.lastName === '') {
                return reject('Please Sign Up!!!');
            }
            return resolve(Object.assign({}, user));
        });
    }

    static setUserData(userData) {
        return new Promise((resolve, reject) => {
            if (userData.firstName === '' || userData.lastName === '') {
                return reject('All fields are required...');
            }
            user = Object.assign({}, user, userData);
            resolve("success");
        });
    }
}

class AuthService {
    static getUserData = () => {
        return AuthApi.getUserData();
    }

    static setUserData = (userData) => {
        return AuthApi.setUserData(userData);
    }
}

export default AuthService;