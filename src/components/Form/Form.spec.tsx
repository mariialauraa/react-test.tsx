import { render, screen, act, waitFor } from "@testing-library/react"
import Form from "./form"
import userEvent from "@testing-library/user-event"

// função mock
const handleSubmitForm = jest.fn()

describe('<Form />', () => {

    // checa se os elementos estão em tela
    it('should render default correctly', () => {
        render(<Form handleSubmitForm={handleSubmitForm}/>)

        const titleForm = screen.getByRole('heading', { name: /Form TDD/i })

        const inputName = screen.getByRole('textbox', { name: 'Nome' })

        const inputLastName = screen.getByRole('textbox', { name: 'Sobrenome' })

        const buttonSubmit = screen.getByRole('button', { name: /enviar/i })

        expect(titleForm).toBeVisible()
        expect(inputName).toBeVisible()
        expect(inputLastName).toBeVisible()
        expect(buttonSubmit).toBeVisible()
    })

    // teste para tentar enviar o formulário sem preencher os campos
    it('should show error message when fields was empty', async () => {
        render(<Form handleSubmitForm={handleSubmitForm}/>)

        const buttonSubmit = screen.getByRole('button', { name: /enviar/i })

        // simular ação do usuário
        act(() => {
            userEvent.click(buttonSubmit)
        })

        await waitFor(() => {
            expect(screen.getByText('Por favor, informe um nome válido')).toBeVisible()
            expect(screen.getByText('Por favor, informe um sobrenome válido')).toBeVisible()
        })
    })

    // preencheu os campos
    it('should type into name and lastname fields and submit form', async () => {
        render(<Form handleSubmitForm={handleSubmitForm}/>)

        const mockName = 'Junior';
        const mockLastName = 'Alves';
        const mockResponse = {
            name: mockName,
            lastName: mockLastName
        }

        const inputName = screen.getByRole('textbox', { name: 'Nome' })

        const inputLastName = screen.getByRole('textbox', { name: 'Sobrenome' })

        const buttonSubmit = screen.getByRole('button', { name: /enviar/i })

        await userEvent.type(inputName, mockName);
        await userEvent.type(inputLastName, mockLastName);
        await userEvent.click(buttonSubmit);


        await waitFor(() => {
            expect(screen.queryByText('Por favor, informe um nome válido')).not.toBeInTheDocument()
            expect(screen.queryByText('Por favor, informe um sobrenome válido')).not.toBeInTheDocument()
        })

        expect(inputName).toHaveValue(mockName)
        expect(inputLastName).toHaveValue(mockLastName)

        await waitFor(() => {
            expect(handleSubmitForm).toHaveBeenCalledTimes(1)
            expect(handleSubmitForm).toHaveBeenCalledWith(
                mockResponse,
                expect.anything()
            )
        })
    })
})