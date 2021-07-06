import {Typography,makeStyles,Box,CircularProgress,Grid} from '@material-ui/core'
import Card from './Card'


const useStyles=makeStyles({
    components:{
        margin:'50px 0',
        display:'flex',
        alignItems:'center',
        flexDirection:'column'
    },
    container:{
        color:'#8ACA2B',
        marginBottom:40
    }
})

const Cards=({data:{confirmed,deaths,recovered,lastUpdate}})=>{
    const classes=useStyles()

    if(!confirmed){
        return <CircularProgress/>
    }
    return(
        <Box className={classes.components}>
            <Typography className={classes.container} variant='h4' gutterBottom> 
            corona virus cases globaly</Typography>
            <Grid container spacing={3} justify='center'>
                <Card cardTitle="Infected"
                value={confirmed.value}
                desc="number of infected cases of covid-19"
                lastUpdate={lastUpdate}/>
                <Card cardTitle="Recovered"
                value={recovered.value}
                desc="number of recovered cases from covid-19"
                lastUpdate={lastUpdate}/>
                <Card cardTitle="Deaths"
                value={deaths.value}
                desc="number of Deaths cased by covid-19"
                lastUpdate={lastUpdate}/>
            </Grid>
        </Box>
    )
}

export default Cards