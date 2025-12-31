export default function FounderEle(props){
    return (
        <div className="founder-card">
            <div className="founder-avatar">
                <img src={props.img} alt={props.name} />
            </div>
            <p className="founder-review">{props.review}</p>
            <div className="founder-info">
                <h3 className="founder-name">{props.name}</h3>
                <p className="founder-role">{props.role}</p>
            </div>
        </div>
    )
}