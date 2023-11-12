import { useState, useRef } from 'react';

export const CountRenders = () => {
	const [value, setValue] = useState('');
	const ref = useRef(0);
	ref.current = ref.current + 1;
	const count = ref.current;

	return (
		<>
			<h2>useRef</h2>

			<input
				value={value}
				type='text'
				onChange={(e) => setValue(e.target.value)}
			/>

			<p>{value}</p>
			<p>I have rendered {count} times</p>
		</>
	);
};
