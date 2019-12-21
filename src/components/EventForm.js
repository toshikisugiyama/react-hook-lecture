import React, {useContext,useState} from 'react'
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_OPERATION_LOG,
} from '../actions'
import AppContext from '../contexts/AppContext'
import {timeCurrentIso8601} from '../utils'

const EventForm = () => {
	const {state, dispatch} = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    })
    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました。',
      operatedAt: timeCurrentIso8601(),
    })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのイベントを削除しました',
        operatedAt: timeCurrentIso8601(),
      })
    }
  }

	const unCreatable = title === '' || body === ''

	return (
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
			<button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
			<button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>すべてのイベントを削除する</button>
		</section>
	)
}

export default EventForm
