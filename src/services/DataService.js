import axios from 'axios'

import config from './config'

class DataService {
    fetchData(token) {
        const url = `${config.baseUrl}/api/data`;
        
        return axios.get(url, { headers: { Authorization: token} })
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
    }

    addValue(newValue, token) {
        const url = `${config.baseUrl}/api/data`

        return axios.post(url, {value: newValue}, { headers: { Authorization: token} })
    }
}

export default DataService;