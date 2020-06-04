import axios from 'axios'

import config from './config'

class ProfileService {
    #url = `${config.baseUrl}/api/profile`;

    fetchProfile(token) {
        return axios.get(this.#url, { headers: { Authorization: token } })
            .then((data) => ( data.data ))
    }

    updateProfile(profile, token) {
        return axios.put(this.#url, profile, { headers: { Authorization: token } })
    }

    createProfile(profile) {
        return axios.post(this.#url, profile)
    }
}

export default ProfileService