function File (props) {
    return (
        <div className="file">
            <span>
                📄 {props.data.name}
            </span>                
        </div>
    )
}

export default File