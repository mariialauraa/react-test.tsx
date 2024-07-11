/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { Buttons } from "."
import userEvent from "@testing-library/user-event"

describe('<Buttons />', () => {

    it('should render the button with the text "Load more"', () => {
        render(<Buttons text="Load more" />)
        expect.assertions(1)

        const button = screen.getByRole('button', { name: /load more/i })
        expect(button).toBeInTheDocument()
        // expect(button).toHaveAttribute('class', 'button')
    })

    it('should call function on button click', async () => {
        // cria um mock para simular a função
        const fn = jest.fn()

        render(<Buttons text="Load more" onClick={fn} />)

        const button = screen.getByRole('button', { name: /load more/i })

        // aqui exige que a função seja assíncrona
        await userEvent.click(button);
        expect(fn).toHaveBeenCalledTimes(1);

        // aqui não
        fireEvent.click(button)
        fireEvent.click(button)
        expect(fn).toHaveBeenCalledTimes(3)
    })

    it('should be disabled when disabled is true', () => {

        render(<Buttons text="Load more" disabled={true} />)

        const button = screen.getByRole('button', { name: /load more/i })

        expect(button).toBeDisabled()
    })

    it('should be enabled when disabled is false', () => {

        render(<Buttons text="Load more" disabled={false} />)

        const button = screen.getByRole('button', { name: /load more/i })

        expect(button).toBeEnabled()
    })
})