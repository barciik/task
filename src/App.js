import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { reducerActions } from './store';

const URL = 'https://reqres.in/api/products';

function App() {
	// const [data, setData] = useState(null);
	const [searchInput, setSearchInput] = useState('');
	const dispatch = useDispatch()
	const data = useSelector(state => state.reducer.colors)

	useEffect(() => {
		axios.get(URL).then((response) => {
			dispatch(reducerActions.setColors(response.data));
		});
	}, [dispatch]);
	if (!data) return null;

	const searchHandler = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	if (searchInput.length > 0) {
		let arr = data.filter((item) => String(item.id).match(String(searchInput)))
		dispatch(reducerActions.setColors(arr))
	}

	return (
		<div className='app'>
			<form>
				<input
					value={searchInput}
					onChange={searchHandler}
					className='search-bar'
					type='number'
					name='search'
				></input>
			</form>
			<ul className='list'>
				{data.map((item) => {
					return (
						<li
							style={{ backgroundColor: `${item.color}` }}
							className='list-item'
							key={item.id}
						>
							<span>
								{item.id} {item.name} {item.year}
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
