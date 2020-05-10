import axios from 'axios'

import config from './config'

class ProfileService {
    fetchProfile(token) {
        const url = `${config.baseUrl}/api/profile`;

        return axios.get(url, { headers: { Authorization: token } })
            .then((data) => ( data.data ))
    }

    updateProfile(profile, token) {
        const url = `${config.baseUrl}/api/profile`;

        return axios.post(url, profile, { headers: { Authorization: token } })
    }
}

export default ProfileService