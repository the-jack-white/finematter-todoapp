/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react'
import ListInput from './index'

test('on initial render, list input should be empty', () => {
    render(<ListInput />);

    screen.debug()
})