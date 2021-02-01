import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import {BsArrowLeft} from 'react-icons/bs'

import { Header, JobDetails } from "../components"
import { CORS_KEY,API_URL } from '../constant/keys'
import { GlobalContext } from '../context/GlobalContext'

export default function JobDetailsContainer() {
  const { jobId } = useParams()
  const { state } = useContext(GlobalContext)
  const { loading } = state
  const [ singleJobDetails,setSingleJobDetails ] = useState({})

  function getJobsData() {
    axios
      .get(CORS_KEY + API_URL + `positions/${jobId}.json`)
      .then(response => {
        setSingleJobDetails(response.data)
      })
  }

  useEffect(() => {
    getJobsData()
  },[])

  //this function is to transform html string to normal html
  function createMarkup(jsonHtml) {
    return {__html : jsonHtml }
  }

  
  return (
    loading
      ? <h2>Loading....</h2>
      : (
        <>
          <Header>
            <Header.Heading>Github Jobs</Header.Heading>
          </Header>
          <JobDetails>
            <JobDetails.Frame>
              <JobDetails.LeftPannel>
                <JobDetails.Frame>
                  <BsArrowLeft />
                  <Link to="/">Back to search</Link>
                </JobDetails.Frame>
                <JobDetails.Frame padding ="2rem">How To apply</JobDetails.Frame>
                <JobDetails.Application
                  dangerouslySetInnerHTML={createMarkup(singleJobDetails.how_to_apply)}
                />
              </JobDetails.LeftPannel>
              <JobDetails.RightPannel>
                <JobDetails.Title>
                  { singleJobDetails.title }
                  <JobDetails.Button>{ singleJobDetails.type }</JobDetails.Button>
                </JobDetails.Title>
                <JobDetails.Frame direction="column">
                  <JobDetails.Logo src={ singleJobDetails.company_logo } />
                  <JobDetails.Text>{singleJobDetails.location}</JobDetails.Text>
                </JobDetails.Frame>
                <JobDetails.Text
                  dangerouslySetInnerHTML={createMarkup(singleJobDetails.description)}
                />
              </JobDetails.RightPannel>
            </JobDetails.Frame>
          </JobDetails>
        </>
        )
  )
}
