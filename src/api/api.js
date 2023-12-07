import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "bd22a74f-133d-4c41-9462-ca44d63b8f21"
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}


export const authAPI = {
    getAuth(){
        return instance.get(`auth/me`)
            .then(response => response);
    },
    login(email, password, rememberMe = false){
        return instance.post('auth/login', {email, password, rememberMe})
            .then(response => response)
    },
    logout(){
        return instance.delete('auth/login')
            .then(response => response)
    }
}

export const followAPI = {
    follow(id){
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },
    unfollow(id){
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(id){
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus(id){
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status})
    },
    savePhoto(file){
        const formData = new FormData();
        formData.append("image", file);
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile){
        return instance.put(`profile/`, profile)
    }
}