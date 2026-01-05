import '../App.scss'

function Price({ price, name }: { price?: number; name?: string }) {
    return (
        <div className="cost-item">
            <span className="cost-label">{name}:</span>
            <span className="cost-value">{price}</span>
        </div>
    )
}

export default Price