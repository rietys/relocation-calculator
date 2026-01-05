import './Price.scss'

function Price({ ticketPrice, rentPrice}: { ticketPrice?: number, rentPrice?: number }) {
    return (
        <>
            <div className="cost-item total">
                <span className="cost-label">TOTAL:</span>
                <span className="cost-value">{(ticketPrice ?? 0) + (rentPrice ?? 0)}</span>
            </div>
            <div className="cost-item">
                <span className="cost-label">TICKET:</span>
                <span className="cost-value">{ticketPrice}</span>
            </div>
            <div className="cost-item">
                <span className="cost-label">RENT:</span>
                <span className="cost-value">{rentPrice}</span>
            </div>
        </>
    )
}

export default Price