/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react'
import App from './App'

test('on initial render, no list items should be added', () => {
    render(<App />);

    screen.debug()
})