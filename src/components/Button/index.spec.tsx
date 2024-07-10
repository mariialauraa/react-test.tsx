import { render } from "@testing-library/react"
import Button from "."

describe('<Button>', () => {
    
    it('should render button', () => {
        const { getByText, getByRole } = render(<Button>button</Button>)

        // verifica se o botão está em tela
        const buttonElement = getByRole('button')
        expect(buttonElement).toBeInTheDocument()

        const buttonTextElement = getByText('button')
        expect(buttonTextElement).toBeInTheDocument()        
    })

    it('shoul render "Carregando..." text when isLoading was passed', () => {
        const { getByText } = render(<Button isLoading>button</Button>)

        const isLoadingText = getByText("Carregando...")
        expect(isLoadingText).toBeInTheDocument()
    })

    it('shoul render the button with background color green by default', () => {
        const { getByRole } = render(<Button>button</Button>)

        const buttonElement = getByRole('button')
        expect(buttonElement).toHaveStyle({
            backgroundColor: 'green'
        })
    })

    it('shoul render the button with background color red when color=red was pessed', () => {
        const { getByRole } = render(<Button color="red">button</Button>)

        const buttonElement = getByRole('button')
        expect(buttonElement).toHaveStyle({
            backgroundColor: 'red'
        })
    })
})