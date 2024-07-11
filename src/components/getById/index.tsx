// O problema de utilizar 'data-testid'

const CardId = () => {

    return (
        <div>
            <div data-testid="card">
                <span>CardId</span>
            </div>

            <div role="contentinfo">
                <h2>CardRole</h2>
            </div>
        </div>
    )
}

export default CardId