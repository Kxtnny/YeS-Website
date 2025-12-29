import PartnerEle from "./PartnerEle.jsx"

export default function PartnerSection({data}){
    const dataElements = data.map((partner) => (
        <PartnerEle 
            key={partner.id}
            img={partner.src}
            name={partner.name}
        />
    ));
    return(
        <section id="partners" className="partner-section">
            <div className="carousel-wrapper">
                <div className="carousel-track">
                    {dataElements}
                    {dataElements}
                </div>
            </div>
        </section>
    )
}
