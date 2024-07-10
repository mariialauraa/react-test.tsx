import { useEffect, useState } from "react"

const Card = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleOpen = () => {
        setIsVisible(true)
    }

    useEffect(() => {
        const timer =setTimeout(() => {
            setIsVisible(true)
        }, 300)

        return () => clearInterval(timer)
    }, [])

  return (
    <div role="contentInfo">
        <h2>Card</h2>

        <button onClick={handleOpen}>
            open
        </button>

        {isVisible && (
            <div role="main">
                <p>Content</p>
            </div>
        )}
    </div>
  )
}

export default Card