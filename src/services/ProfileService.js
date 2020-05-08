import axios from 'axios'

import config from './config'


class ProfileService {
    fetchProfile() {
        const url = `${config.baseUrl}/api/profile`;

        return axios.get(url)
            .then((data) => ( data.data ))
    }

    updateProfile(profile) {
        return new Promise((resolve, reject) => {
            console.log("updating: ", profile);
            setTimeout(() => {
                resolve(profile);
            }, 1000)
        })
    }
}

export default ProfileService