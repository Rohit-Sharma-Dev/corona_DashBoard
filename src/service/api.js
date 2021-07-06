import axios from 'axios'

const url="https://covid19.mathdro.id/api"

export const fetchData=async(country)=>{
    let changedurl=url;
    if (country){
        changedurl=`${url}/countries/${country}`
    }
    try {
        const {data:{confirmed,deaths,recovered,lastUpdate}}=await axios.get(changedurl);
        return {confirmed,deaths,recovered,lastUpdate}
    } catch (err) {
        return err
    }
}

export const fetchCountries=async()=>{
    try {
       const {data:{countries}}=await axios.get(`${url}/countries`) 
       return countries.map(country=>country.name);
    } catch (error) {
        return error
    }
}