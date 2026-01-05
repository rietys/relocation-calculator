import './Location.scss'

function Location() {
    return (
        <>
            <div className="form-group">
                <label htmlFor="from-location">FROM</label>
                <input type="text" id="from-location" placeholder='Current location'/>
            </div>
            <div className="form-group">
                <label htmlFor="from-location">TO</label>
                <input type="text" id="from-location" placeholder='Destination'/>
            </div>
        </>    
    )
}

export default Location

