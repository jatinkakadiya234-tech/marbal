
let url = "http://localhost:9999/api"
import axios from "axios"


const Apihelper = {
   
    getallblogs: async () => {
       return await axios.get(`${url}/bloge/getall`)
    },

}

export default Apihelper