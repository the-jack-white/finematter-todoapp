/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react'
import ListItem from './index'

test('on initial render, no list items should be added', () => {
    render(<ListItem Todo="hello world" Index={1} />);

    screen.debug()
})