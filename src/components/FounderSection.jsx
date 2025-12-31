import FounderEle from "./FounderEle.jsx"

export default function FounderSection({data}){
    const founderElements = data.map((founder) => (
        <FounderEle 
            key={founder.name}
            img={founder.img}
            name={founder.name}
            role={founder.role}
            review={founder.review}
        />
    ));

    return(
        <section id="founders" className="founder-section">
            <h2 className="section-title animate-scroll">Meet Our Founders</h2>
            <p className="founder-description animate-scroll">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                quis enim.
            </p>
            <div className="founders-grid animate-scroll">
                {founderElements}
            </div>
        </section>
    )
}