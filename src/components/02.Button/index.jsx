export const Buttons = ({ text, onClick, disabled }) => (
    <button 
        className="button"
        onClick={onClick}
        disabled={disabled}
    >
        {text}
    </button>
)