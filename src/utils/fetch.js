//import axios from 'axios'
//import { useContext } from 'react'

//import { CORS_KEY,API_URL } from '../constant/keys'
//import { GlobalContext } from '../context/GlobalContext'

//function getJobsData() {
//    axios
//      .get(CORS_KEY + API_URL + `positions.json?description=${state.description}&location=${state.location}`)
//      .then(response => {
//        dispatch({ type: ACTIONS.LOADING_STATE, payload: response.data })
//      })
//      .catch(error => {
//        dispatch({type : "FETCH_ERROR" })
//      })
//  }

//  //searching for jobs by key words, use this function
//  function getJobsDataByKeyWords() {
//    axios
//      .get(CORS_KEY + API_URL + `positions.json?search=${state.search}`)
//      .then(response => {
//        dispatch({ type: ACTIONS.LOADING_STATE, payload : response.data })
//      })
//      .catch(error => {
//        dispatch({type : "FETCH_ERROR" })
//      })
//    return state.loading = true
//  }

//  //searching for jobs that are full time. use this function
//  function getFulltimeJobs() {
//    axios
//      .get(CORS_KEY + API_URL + `positions.json?description=${state.description}&full_time=${state.full_time}&location=${state.location}`)
//      .then(response => {
//        dispatch({ type: ACTIONS.LOADING_STATE, payload: response.data })
//      })
//      .catch(error => {
//        dispatch({type : "FETCH_ERROR" })
//      })
//  }


//export { getJobsData ,getJobsDataByKeyWords, getFulltimeJobs }