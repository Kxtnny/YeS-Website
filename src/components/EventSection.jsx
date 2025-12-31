import EventEle from "./EventEle.jsx"

export default function EventSection({data}){
    const eventElements = data.map((event) => (
        <EventEle 
            key={event.id}
            img={event.src}
            link={event.ref}
            title={event.title}
            description={event.description}
            date={event.date}
        />
    ));

    return(
        <section id="events" className="event-section">
            <h2 className="section-title animate-scroll">Our Recent Events</h2>
            <div className="events-scroll-container">
                {eventElements}
            </div>
        </section>
    )
}