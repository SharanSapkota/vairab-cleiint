import React, {useState, useEffect} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getAggregatedLogs, getLogs } from '../../services';

import  BarChart from './barChart';
import Table from './table';

const Home = () => {
  const navigate = useNavigate();
 const [logs, setLogs] = useState([])
 const [aggregatedLogs, setAggregatedLogs] = useState([])


  useEffect( () => {
    const isAuth = localStorage.getItem('token');

    if(!isAuth){
      navigate('/')
    } else {
      getLog();
      getSpecificLogs();
    }
  }, [])
 
  const getSpecificLogs = () => {
    getAggregatedLogs().then(({result}) => {
        setAggregatedLogs(result)
    })
  }

  const getLog = async () => {
    const { result } = await getLogs()
    if(result){
      setLogs(result)
    }
  }


  return (
  <>
    <BarChart aggregatedLogs = {aggregatedLogs} logs={logs}/>
    <Table aggregatedLogs = {aggregatedLogs} logs={logs}/>
    </>
  )
  }

export default Home