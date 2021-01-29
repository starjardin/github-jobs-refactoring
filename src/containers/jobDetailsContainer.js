import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import axios from "axios"

import { JobDetails, ListOfJobs } from "../components"
import { CORS_KEY,API_URL } from '../constant/keys'

export default function JobDetailsContainer() {
  const { jobId } = useParams()
  const [singleJobDetails, setSingleJobDetails] = useState({})

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
    <JobDetails>
      <JobDetails.Frame>
        <JobDetails.LeftPannel>
          <Link to="/">Back to search</Link>
          <JobDetails.Application
            dangerouslySetInnerHTML={createMarkup(singleJobDetails.how_to_apply)}
          />
        </JobDetails.LeftPannel>
        <JobDetails.RightPannel>
          <JobDetails.Title>
            { singleJobDetails.title }
          </JobDetails.Title>
          <ListOfJobs.Image />
          <JobDetails.Text
            dangerouslySetInnerHTML={createMarkup(singleJobDetails.description)}
          />
        </JobDetails.RightPannel>
      </JobDetails.Frame>
    </JobDetails>
  )
}
