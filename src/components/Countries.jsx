import {useState,useEffect} from 'react'
import {fetchCountries} from '../service/api'
import {Typography,NativeSelect} from '@material-ui/core'

const Countries=({handelCoutryChange})=>{

    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        const fetchApi = async() => {
            setCountries(await fetchCountries());
        }
        fetchApi();
    }, [])
    return(
        <>
        <Typography style={{marginBottom:20}} varient="h5" color='textSecondary'>
            Reported cases or Deaths by country or terriotry
        </Typography>
        <NativeSelect onChange={(e)=>handelCoutryChange(e.target.value)}>
            <option value="">united state</option>
            {countries.map((country,i)=>{
                return (
                <option key={i} value={country}>{country}</option>
                )
            })}
        </NativeSelect>
        </>
    )
}
export default Countries