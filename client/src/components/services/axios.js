import axios from 'axios';
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const apiURL = import.meta.env.VITE_API_URL

const axiosInstance = axios.create({
    baseURL: `${apiURL}`,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const weatherGet = async (location) => {
    try {
        const response = await axiosInstance.get(`/forecast.json?key=${apiKey}&q=${location}&days=7`)

        console.log(response)
        return (response.data)
    } catch (error) {
        console.log('erreur :', error)
    }

}


