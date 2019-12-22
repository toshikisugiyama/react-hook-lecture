import React, { useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import EventForm from './EventForm'
import OperationLogs from './OperationLogs'
import Events from './Events'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

const App = () => {
  const initialState = {
    events: [],
    operationLogs: [],
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <div className="row">
          <EventForm />
          <Events />
          <OperationLogs />
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
