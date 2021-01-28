import React, { useContext, createContext, useEffect } from 'react'

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


function reducer() {
  
}