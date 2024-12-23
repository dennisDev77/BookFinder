import axios from "axios";
const key='AIzaSyD-HW_Gm0581UuWc81NTDNnkblhb9V_j6s'

const api=axios.create({
    baseURL:'https://www.googleapis.com/books/v1/volumes?q=flowers+'
})

export default api