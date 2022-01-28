/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react'
import Button from './index'

test('on initial render, button should be active', () => {
    render(<Button />);

    screen.debug()
})