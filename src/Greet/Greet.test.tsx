import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'

describe("Testing Greet component", () => {
    test('Greet render correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText('Greet')
        expect(textElement).toBeInTheDocument() 
    })
    
    
    test('Greet render correctly with name', () => {
        const name = "Boris"
        render(<Greet name={name}/>)
        const textElement = screen.getByText(`Greet, ${name}!`)
        expect(textElement).toBeInTheDocument() 
    })
})