import { useState } from 'react'

// check if value is a string
const isString = (value) => typeof value === 'string'

const saveToLocalStorage = (key, value) => window.localStorage.setItem(key, value)

export function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			// get from local storage by key
			const item = window.localStorage.getItem(key)

			// if initial value is a string, return it
			if (isString(initialValue)) return item ?? initialValue

			// parse stored json or if none return initialValue
			return JSON.parse(item) ?? initialValue
		} catch (error) {
			// if error also return initialValue
			console.error(error)
			return initialValue
		}
	})

	const setValue = (value) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value
			// save state
			setStoredValue(valueToStore)
			// save to local storage
			if (isString(initialValue)) return saveToLocalStorage(key, valueToStore)

			return saveToLocalStorage(key, JSON.stringify(valueToStore))
		} catch (error) {
			console.error(error)
		}
	}

	return [storedValue, setValue]
}
