
import { Component } from 'react';
import {Box,withStyles,Typography} from '@material-ui/core'
import logo from './Images/COVID19.jpg'
import Cards from './components/Cards'
import {fetchData} from './service/api';
import Chart from './components/Chart'
import Countries from './components/Countries';

const style={
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column'
  },
  header:{
    background:'#F5F5F5',
    width:400,
    textAlign:'center',
    fontSize:'20px',
    padding:'10px',
    color:'#777'
  },
  lastUpdate:{
    color:'#777',
    fontSize:'12px'
  }
}


class App extends Component{

  state={
    data:{},
    country:''
  }
  async componentDidMount(){
    const fetchedData=await fetchData();
    this.setState({data:fetchedData})
    console.log(fetchedData)
  }
  handelCoutryChange=async(country)=>{
    const fetchedData=await fetchData(country);
    this.setState({data:fetchedData,country:country})
    console.log(fetchedData)
  }
  render(){
    const {data}=this.state;
    console.log(data.lastUpdate)
    return(
    <Box className={this.props.classes.container}>
        <Box className={this.props.classes.header}>COVID-19 CORONAVIRUS PANDEMIC</Box>
        <Typography className={this.props.classes.lastUpdate}>Last Updated:{data.lastUpdate && new Date(data.lastUpdate).toDateString()}</Typography>
        <img style={{width:350}} src={logo} alt='corona'/>
        <Cards data={data}/>
        <Countries handelCoutryChange={this.handelCoutryChange}/>
        <Chart data={data}/>
    </Box>
    )
  }
}

export default withStyles(style) (App);
