class DataService {
    fetchData() {
        return new Promise((resolve, reject) => {
            const data = [
                {
                  name: '4/26', weight: 239.8, goal: 200
                }, {
                    name: '4/27', weight: 238.9, goal: 200
                }, {
                    name: '4/28', weight: 238.4, goal: 200
                }, {
                    name: '4/29', weight: 241.0, goal: 200
                }, {
                    name: '4/30', weight: 239.8, goal: 200
                }, {
                    name: '5/01', weight: 239.0, goal: 200
                }, {
                    name: '5/02', weight: 238.0, goal: 200
                }
            ]
            resolve(data)
        })
    }
}

export default DataService;