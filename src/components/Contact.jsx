
export default function Contact({img, name, phoneNum, email}) {
    return (
        <div className="contacts">
            <article className="contact-card">
                <img
                    src={img}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{name}</h3>
                <div className="info-group">
                    <img
                      //  src={globe}
                        alt="phone icon"
                    />
                    <p>{phoneNum}</p>
                </div>
                <div className="info-group">
                    <img
                      //src={globe}
                        alt="mail icon"
                    />
                    <p>{email}</p>
                </div>
            </article>

        </div>
    )
}