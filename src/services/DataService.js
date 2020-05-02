import axios from 'axios'

import config from './config'

class DataService {
    fetchData() {
        const url = `${config.baseUrl}/api/data`;
        console.log('hitting: ', url);
        return axios.get(url)
            .then((data) => {
                return data.data
            })
            .catch((error) => {
                console.log('error: ', error)
            })
    }

    addValue(newValue) {
        return new Promise((resolve, reject) => {
            console.log("adding: ", newValue)
            resolve({});
        })
    }
}

export default DataService;