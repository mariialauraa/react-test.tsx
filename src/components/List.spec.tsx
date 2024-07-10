import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import List from "./List"

describe('List Component', () => {

    it('should render list items', () => {
        const { getByText } = render(<List initialItems={['Diego', 'Rodz', 'Mayk']} />)

        expect(getByText('Diego')).toBeInTheDocument()
        expect(getByText('Rodz')).toBeInTheDocument()
        expect(getByText('Mayk')).toBeInTheDocument()
        
        render(<List initialItems={['Julia']} />)
    })

    it('should be able to add new item to the list', async () => {
        render(<List initialItems={[]}/>)
        
        const newItemText = 'Novo Item'

        // Encontrando o input e simulando a digitação
        const inputElement = screen.getByPlaceholderText('Novo item') as HTMLInputElement

        userEvent.type(inputElement, newItemText)

        // Utilizando waitFor para esperar pela atualização do estado newItem
        await waitFor(() => {
            expect(inputElement.value).toBe(newItemText)
        })

        // Encontrando o botão e clicando nele
        const addButton = screen.getByText('Adicionar')
        userEvent.click(addButton)

        // Utilizando waitFor para esperar pela atualização na lista
        await waitFor(() => {
            expect(screen.getByText(newItemText)).toBeInTheDocument()
        })
    })

    it('should be able to remove item from the list', async () => {
        render(<List initialItems={['Diego']}/>)

        // Verifica se o item 'Diego' está presente antes de tentar removê-lo
        expect(screen.getByText('Diego')).toBeInTheDocument()

        // Encontra todos os botões de "Remover" e clica no primeiro
        const removeButtons = screen.getAllByText('Remover')
        userEvent.click(removeButtons[0])

        // Espera até que o item com texto 'Diego' seja removido da interface
        await waitForElementToBeRemoved(() => screen.getByText('Diego'))

        // Verifica se o item 'Diego' não está mais na interface
        expect(screen.queryByText('Diego')).not.toBeInTheDocument()
    })

})