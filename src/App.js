import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)
  const times = () => setCount(count * 2)
  // const perThree = () => setCount(count%3!==0?count:count/3)
  const perThree = () => setCount(previousCount => {
    if (previousCount%3===0) {
      return previousCount/3
    }
    return previousCount
  })

  return (
    <>
      <div>
        <span>count: {count}</span>
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={times}>×2</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
      </div>
      <div>
        <button onClick={perThree}>3の倍数のときだけ3で割る</button>
      </div>
    </>
  )
}

export default App
