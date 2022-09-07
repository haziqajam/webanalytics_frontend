import axios from "axios"

const apiCalls = {};
const requestUrl = 'https://webanalyticsbackendapp.herokuapp.com'

const token = window.localStorage.getItem("token");
const refreshToken = window.localStorage.getItem("refreshtoken");
const login = window.localStorage.getItem("login");

apiCalls.getDashBoardData = async () => {

    console.log("token : ", token);
    const response = await axios.get(`${requestUrl}/dashboard`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log(response);
    return response;
}


apiCalls.signIn = async (payload) => {

    const response = await axios.post(`${requestUrl}/user/sign-in`, payload);
    console.log(response);
    if (response.data) {

        if (response.data.success) {
            return response.data.data;
        }
        else {
            return false
        }
    };


}

export default apiCalls
