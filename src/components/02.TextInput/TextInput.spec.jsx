/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TextInput } from "."

describe('<TextInput />', () => {

    it('should have a value of searchValue', () => {
        const fn = jest.fn()
        render(<TextInput handleChange={fn} searchValue={'testando'} />)

        const input = screen.getByPlaceholderText(/type your search/i)

        expect(input.value).toBe('testando')
    })

    it('should call handleChange function on each key pressed', async () => {
        const fn = jest.fn()
        render(<TextInput handleChange={fn} />)

        const input = screen.getByPlaceholderText(/type your search/i)

        const value = 'o valor'

        // verifica se a função foi chamada a partir da qtde de tecla digitada
        await userEvent.type(input, value)
        expect(input.value).toBe(value)
        expect(fn).toHaveBeenCalledTimes(value.length)

        // checar se tem uma string vazia no input
        userEvent.clear(input)
        expect(input.value).toBe('')
        expect(fn).toHaveBeenCalledTimes(value.length + 1)
        // +1 para a chamada da função ao limpar o input
    })

    it('should match snapshot', () => {
        const fn = jest.fn()
        const {container} = render(<TextInput handleChange={fn} />)

        expect(container).toMatchSnapshot()
    })
})