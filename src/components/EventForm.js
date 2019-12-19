import React, {useState} from 'react'
import {CREATE_EVENT, DELETE_ALL_EVENTS} from '../actions'

const EventForm = ({state, dispatch}) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS })
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
			<button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>すべてのイベントを削除する</button>
		</section>
	)
}

export default EventForm