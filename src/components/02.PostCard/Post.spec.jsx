/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { PostCard } from "."
import { postCardPropsMock } from './mock'

const props = postCardPropsMock

describe('<Post Card />', () => {

    it('should render PostCard correctly', () => {
        render(<PostCard {...props} />)

        expect(screen.getByAltText(/title 1/i))
            .toHaveAttribute('src', 'img/img.png')

        expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument()

        expect(screen.getByText(props.body)).toBeInTheDocument()

        // as diversas formas de testar um elemento
    })

    // snapshot
    it('should match snapshot', () => {
        const { container } = render(<PostCard {...props} />)

        expect(container.firstChild).toMatchSnapshot()
    })
})