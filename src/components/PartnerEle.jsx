export default function PartnerEle(props){
    return(
        <div className="partner-container">
            <div className="partner-img-container">
                <img src={props.img} alt={props.name} className="partner-logo"/>
            </div>
        </div>
    )
}
