import { useState, ChangeEvent } from 'react'

export const Greet = ({ name }: { name?: string }) => {
    const [value, setValue] = useState('')

    const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <div className="jo">
            <p>{name ? `Greet, ${name}!` : 'Greet'}</p>
            <h1 style={{ color: value.length % 2 === 0 ? 'red' : 'blue' }}>{value}</h1>
            <input type="text" onChange={changeInputHandler} />
        </div>
    )
}
