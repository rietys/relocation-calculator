function Location({ placeholder }: { placeholder?: string }) {
    return (
        <div className="form-group">
            <label htmlFor="from-location">FROM</label>
            <input type="text" id="from-location" placeholder={placeholder}/>
        </div>
    )
}

export default Location

