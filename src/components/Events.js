import React, {useContext} from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContext'

const Events = () => {
	const {state} = useContext(AppContext)
	return (
		<section className="col-12 col-xl-7 my-5">
			<h1>イベント一覧</h1>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>タイトル</th>
						<th>ボディ</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{state.map((event, index) => (<Event key={index} event={event} />))}
				</tbody>
			</table>
		</section>
	)
}

export default Events