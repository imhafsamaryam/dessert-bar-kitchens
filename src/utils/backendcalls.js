import axios from "axios"

export const getToken = (body) => {
    return axios.post('https://admin.gifinfinity.com/accounts/api/client/v1/user-otp-login/', body)
}

export const getProducts = () => {
    return axios.get('https://admin.gifinfinity.com/products/api/client/v1/products-list/', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
}