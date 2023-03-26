import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react'
import App from './App'

describe('Testing App component', () => {
    test('Component should render "Hello world" string', () => {
        render(<App />);
        const textElement = screen.getByText('Hello world');
        expect(textElement).toBeInTheDocument();
    })
})