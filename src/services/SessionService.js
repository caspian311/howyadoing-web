import axios from 'axios'

import config from './config'

class SessionService {
    createSession(email, password) {
        const url = `${config.baseUrl}/api/sessions`;

        return axios.post(url, { email, password })
            .then((data) => ( data.data ))
    }
}

export default SessionService