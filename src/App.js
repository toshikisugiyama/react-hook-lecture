import React, { useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const {name, price} = state

  return(
    <>
      <p>現在の{state.name}は{state.price}円です。</p>
      <button onClick={()=>setState({...state, price: price + 1})}>+1</button>
      <button onClick={()=>setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <div>
        <input value={state.name} onChange={ e => setState({...state, name: e.target.value})} />
      </div>
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000,
}

export default App