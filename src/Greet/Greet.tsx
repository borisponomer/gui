import { useState, ChangeEvent, useEffect } from 'react'
import { Item } from './Item'

export const Greet = ({ name }: { name?: string }) => {
    const [value, setValue] = useState('')

    const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    
    useEffect(() => {
        if (value.length % 10 === 0) {
            const bigLetters = value.split('').filter(char => char.toUpperCase() === char).join('')
            console.log(bigLetters)
        }
    }, [value])

    return (
        <div className="jo">
            <p>{name ? `Greet, ${name}!` : 'Greet'}</p>
            <h1 style={{ color: value.length % 2 === 0 ? 'red' : 'blue' }}>{value}</h1>
            <input type="text" onChange={changeInputHandler} />
            {value.split('').map(letter => <Item key={letter + new Date().getTime()} />)}
        </div>
    )
}
