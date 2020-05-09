import axios from 'axios'

import config from './config'

class ProfileService {
    fetchProfile() {
        const url = `${config.baseUrl}/api/profile`;

        return axios.get(url)
            .then((data) => ( data.data ))
    }

    updateProfile(profile) {
        const url = `${config.baseUrl}/api/profile`;

        return axios.post(url, profile)
    }
}

export default ProfileService