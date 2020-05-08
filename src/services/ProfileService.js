class ProfileService {
    fetchProfile() {
        return new Promise((resolve, reject) => {
            resolve({
                name: 'Matt Todd',
                email: 'matt.c.todd@gmail.com', 
                goal: 200
            });
        })
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