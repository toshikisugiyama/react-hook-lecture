import React, { useState,useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
    })
    setTitle('')
    setBody('')
  }
  return(
    <div className="container-fluid">
      <div className="row">
        <section className="col-12 col-xl-5 my-5">
          <h1>イベント作成フォーム</h1>
          <form>
            <div className="form-group">
              <label htmlFor="formEventTitle">タイトル</label>
              <input id="formEventTitle" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="formEventBody">ボディ</label>
              <textarea id="formEventBody" className="form-control" value={body} onChange={e => setBody(e.target.value)} />
            </div>
          </form>
          <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
          <button className="btn btn-danger">イベントを削除する</button>
        </section>
        <section className="col-12 col-xl-7 my-5">
          <h1>イベント一覧</h1>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>タイトル</th>
                <th>ボディ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}

export default App