import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";


export const Contact = () => {
    
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    const openLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/ananya-sinha-6703a620b';
    }

    const openGitHub = () => {
        window.location.href = 'https://github.com/frenchbunnies';
    }

    const openKingsLabs = () => {
        window.location.href = 'https://kings-labs.com/academy';
    }

  

    return (
        <section className="contact" id="contact">
            <Container>
                <Row>
                    <Col>
                        
                        <div className="contact-box">
                            <h5>Contact Me!</h5>
                            <Carousel responsive={responsive} infinite={true} className="contact-slider">
                                    <div className="contact-button">
                                        <button onClick={openLinkedIn}>LinkedIn</button>
                                    </div>
                                    <div className="contact-button">
                                        <button onClick={openGitHub}>GitHub</button>
                                    </div>
                                    <div className="contact-button">
                                        <button onClick={openKingsLabs}>King's Labs</button>
                                    </div>
                            </Carousel>
                            <p>Thanks for visiting my website!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </section>
    );
}

