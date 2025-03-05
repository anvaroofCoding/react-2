import { createContext, useState } from 'react'

export const cardContext = createContext()

import React from 'react'

const CardList = ({ children }) => {
	const [count, setCount] = useState([])
	console.log(count)

	const pushCard = items => {
		let current = [...count]
		current.push(items)
		setCount(current)
	}

	return (
		<cardContext.Provider value={{ count, setCount, pushCard }}>
			{children}
		</cardContext.Provider>
	)
}

export default CardList
