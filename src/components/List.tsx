import { useState } from "react"

type ListProps = {
    initialItems: string[]
}

function List({ initialItems }: ListProps) {
  const [newItem, setNewItem] = useState("")
  const [list, setList] = useState(initialItems)

  function addToList() {
    setTimeout(() => {
      setList(state => [...state, newItem])
    }, 500)
  }

  function removeFromList(itemToRemove: string) {
    setTimeout(() => {
      setList(state => state.filter(item => item !== itemToRemove))
    }, 500)
  }

  return (
    <>
      <input
        placeholder="Novo item"
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
      />
      <button onClick={addToList}>Adicionar</button>
      <ul>
      {list.map((item, index) =>
        <li key={`${item}-${index}`}>
          {item}
          <button onClick={() => removeFromList(item)}>
            Remover
          </button>
        </li>
      )}
      </ul>
    </>
  )
}

export default List
