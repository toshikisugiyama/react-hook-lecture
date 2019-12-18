import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = props => {
  return(
    <div className="container-fluid">
      <section className="my-5">
        <h1>イベント作成フォーム</h1>
        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input id="formEventTitle" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="formEventBody">ボディ</label>
            <textarea id="formEventBody" className="form-control"/>
          </div>
        </form>
        <button className="btn btn-primary">イベントを作成する</button>
        <button className="btn btn-danger">イベントを削除する</button>
      </section>
      <section className="my-5">
        <h1>イベント一覧</h1>
        <table className="table table-hover">
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </section>
    </div>
  )
}

export default App