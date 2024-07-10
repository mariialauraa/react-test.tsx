import { fireEvent, render, screen } from "@testing-library/react";
import Card from ".";

describe('<Card>', () => {

    it('should render component by default', () => {
        render(<Card />)

        const divElement = screen.getByRole('contentInfo')
        expect(divElement).toBeVisible()
    })

    it('should render async component', async () => {
        render(<Card />)

        // o 'find' espera o elemento aparecer em tela
        const mainElement = await screen.findByRole('main')
        expect(mainElement).toBeVisible()
    })

    it('should open component when clicked button was clicked', async () => {
        render(<Card />)

        // pega o botão e testa se ele ta em tela
        const buttonElement = screen.getByRole('button', { name: 'open' })
        expect(buttonElement).toBeVisible()

        // testa se o 'main' não estar visível antes do click do botão
        expect(screen.queryByRole('main')).not.toBeInTheDocument()

        // simula o click no botão e testa se o 'main' ta visível
        fireEvent.click(buttonElement)
        const mainElement = screen.getByRole('main')
        expect(mainElement).toBeVisible()
    })
})