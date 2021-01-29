import React, { useReducer, createContext, useEffect } from 'react'  
import axios from 'axios'

import { reducer } from '../hooks/useReducer'
import { CORS_KEY,API_URL } from '../constant/keys'
import ACTIONS from '../constant/actions'

const GlobalContext = createContext()

const initialState = {
  description: "python",
  location: "",
  search: "code",
  full_time: false,
  jobs: [],
  loading: true,
  error: "",
  id : ""
}


function JobsContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  async function getJobsData() {
    try {
      const response = await axios.get(CORS_KEY + API_URL + `positions.json?description=${ state.description }&location=${ state.location }`)
      console.log(response);
      dispatch({ type: ACTIONS.LOADING_STATE, payload: response.data })
    } catch(error) {
      console.log(error);
      dispatch({type : "FETCH_ERROR" })
    }
  }

    //searching for jobs by key words, use this function
    //function getJobsDataByKeyWords() {
    //  axios
    //    .get(CORS_KEY + API_URL + `positions.json?search=${state.search}`)
    //    .then(response => {
    //      dispatch({ type: ACTIONS.LOADING_STATE, payload : response.data })
    //    })
    //    .catch(error => {
    //      dispatch({type : "FETCH_ERROR" })
    //    })
    //  return state.loading = true
    //}

    ////searching for jobs that are full time. use this function
    //function getFulltimeJobs() {
    //  axios
    //    .get(CORS_KEY + API_URL + `positions.json?description=${state.description}&full_time=${state.full_time}&location=${state.location}`)
    //    .then(response => {
    //      dispatch({ type: ACTIONS.LOADING_STATE, payload: response.data })
    //    })
    //    .catch(error => {
    //      dispatch({type : "FETCH_ERROR" })
    //    })
    //}
  
  //fetch data when the app loads
  
  useEffect(() => {
    let isCanceled = false;
    !isCanceled && getJobsData()
    return () => {
      isCanceled = true;
    }
  }, [])

  //useEffect(() => {
  //  getJobsData()
  //}, [state.description])

  //useEffect(() => {
  //  getJobsData()
  //}, [state.location])

  //useEffect(() => {
  //  getFulltimeJobs()
  //}, [state.full_time])

  //useEffect(() => {
  //  getJobsDataByKeyWords()
  //}, [state.search])

  // here we return our value that are going to be shared in other components
  return (
    <GlobalContext.Provider value={{state, dispatch }}>
      { children }
    </GlobalContext.Provider>
  )
}

export { JobsContextProvider, GlobalContext }