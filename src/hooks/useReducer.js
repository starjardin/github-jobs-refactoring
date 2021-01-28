import { ACTIONS } from '../constant/actions'

function reducer(state,action) {
  switch (action.type) {
    case ACTIONS.LOADING_STATE : {
      return {
        ...state,
        jobs: action.payload,
        loading : false
      }
    }
    case ACTIONS.FETCH_ERROR : return {
      ...state, error : "Something went wrong🥱!! try again"
    }
    case ACTIONS.SEARCH_JOB_BY_KEY_WORDS : {
      return {
        ...state,
        search: action.foundJobsByKeyWords,
        loading: false,
        description: '',
        location : ''
      }
    }
    case ACTIONS.SEARCH_BY_FULL_TIME_JOB: {
      console.log(action.fullTimeJobIsChecked);
      if (action.fullTimeJobIsChecked) {
        return {
          ...state,
          loading: false,
          description: '',
          loaction: '',
          full_time: action.fullTimeJobIsChecked,
        }
      } else {
        return state
      }
    }
    case ACTIONS.SEARCH_JOB_BY_LOCATION: {
      return {
        ...state,
        description: '',
        location: action.foundJobsByLocation,
        loading: false
      }
    }
    case ACTIONS.SEARCH_JOB_BY_GIVEN_LOCATION: {
      return {
        ...state,
        description : '',
        location: action.foundJobsByGivenLocation,
        loading : false
      }
    }
    default: {
      return state
    }
  }
}