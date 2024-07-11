import { render, screen, within } from "@testing-library/react";

import CardId from ".";

describe('<CardId>', () => {
    
    // não é recomendável usar 'data-testid'
    it('should render componentId by default', () => {
        render(<CardId />)

        expect(screen.getByTestId('card')).toBeInTheDocument()
    })

    // utilize qdo possível '.toBeVisible()' ao invés de '.toBeInTheDocument()' para não ocorrer testes falsos/positivos.

    it('should render component by default', () => {
        render(<CardId />)

        expect(screen.getByRole('contentinfo')).toBeVisible()

        const title = screen.getByRole('heading')
        expect(title).toBeVisible()

        // uma opção para procurar elementos na <div>, sem usar o 'data-testid'
        const divElement = screen.getByRole('contentinfo')
        expect(within(divElement).getByText(/cardRole/i)).toBeVisible()

        //com o 'within' é capturado a <div>, e ela retorna os elementos dentro da <div>, os children.
    })
})

