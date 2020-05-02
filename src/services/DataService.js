import axios from 'axios'

import config from './config'

class DataService {
    fetchData() {
        const url = `${config.baseUrl}/api/data`;
        console.log('hitting: ', url);
        return axios.get(url)
            .then((data) => {
                const dateFormatter = new Intl.DateTimeFormat('en', { month: '2-digit', day: '2-digit' })

                return data.data.map((datum) => {
                    let parsedDate = Date.parse(datum.date)
                    let formattedDate = dateFormatter.format(parsedDate)

                    return {
                        name: formattedDate,
                        weight: datum.value,
                        goal: datum.goal
                    };
                })
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