import { createContext, useState } from 'react'

export const cardContext = createContext()

import React from 'react'
import { toast } from 'react-toastify'

const CardList = ({ children }) => {
	const [count, setCount] = useState([])

	const pushCard = items => {
		if (count.length == 0) {
			let current = [...count]
			current.push({ ...items, soni: 1 })
			setCount(current)
			toast.success("Maxsulot savatchaga qo'shildi!")
		} else {
			let current = [...count]
			let finished = current.find(prod => {
				return prod.id == items.id
			})
			if (!finished) {
				current.push({ ...items, soni: 1 })
				setCount(current)
				toast.success("Maxsulot savatchaga qo'shildi!")
			} else {
				toast.warning('Maxsulot Savatchada mavjud!')
				// alert('bu hamsulot savatchada bor')
			}

			console.log(finished)
		}
	}

	const incr = i => {
		let current = [...count]
		if (current[i].stock !== current[i].soni) {
			current[i].soni += 1
		} else {
			// alert('qolmadi')
			toast.warning('Mahsulot qolmadi!')
		}
		setCount(current)
	}

	const dikr = i => {
		let current = [...count]
		if (current[i].soni !== 1) {
			current[i].soni -= 1
		} else {
			current.splice(i, 1)
		}
		setCount(current)
	}

	const del = i => {
		let current = [...count]
		current.splice(i, 1)
		setCount(current)
		toast.success('Maxsulot savatchadan olib tashlandi!')
	}

	return (
		<cardContext.Provider
			value={{ count, setCount, pushCard, incr, dikr, del }}
		>
			{children}
		</cardContext.Provider>
	)
}

export default CardList
