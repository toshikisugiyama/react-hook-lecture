import React, { useContext } from 'react'
import OperationLog from '../components/OperationLog'
import AppContext from '../contexts/AppContext'

const OperationLogs = () => {
  const { state } = useContext(AppContext)
  return (
    <section className="col-12 col-xl-5 my-5">
      <h1>操作ログ一覧</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {
            state.operationLogs.map((operationLog, index) => {
              return <OperationLog key={index} operationLog={operationLog} />
            })
          }
        </tbody>
      </table>
    </section>
  )
}

export default OperationLogs
