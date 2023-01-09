import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'https://reqres.in/api/products';

function App() {
	const [data, setData] = useState(null);
	const [searchInput, setSearchInput] = useState('');

	useEffect(() => {
		axios.get(URL).then((response) => {
			setData(response.data);
		});
	}, []);
	if (!data) return null;
  console.log(data)

	const searchHandler = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	if (searchInput.length > 0) {
		data.data.filter((item) => item.id.include(searchInput))
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
				{data.data.map((item) => {
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
