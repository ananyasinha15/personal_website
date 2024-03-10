import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState} from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import experienceHeader from '../assets/images/experience-header.jpg'
import { Modal, Button } from 'react-bootstrap';

export const Experience = () => {
    const [experience, setExperience] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState({});

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const experienceResponse = await fetch('/experience');
        const experienceData = await experienceResponse.json();
        setExperience(experienceData);
    }

    const handleExperienceClick = (e) => {
        // Set the selected experience and show the modal
        setSelectedExperience(e);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        // Close the modal
        setShowModal(false);
    };

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

    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col>
                        <img className='experience-top-image' src={experienceHeader} alt="Experience Header" />
                        <div className="experience-box">
                            <h5>Experience & Skills</h5>
                            <Carousel responsive={responsive} infinite={true} className="experience-slider">
                                {experience && experience.map(e => (
                                    <div key={e.id} className="unit" onClick={() => handleExperienceClick(e)}>
                                        <h2>{e.role}</h2>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedExperience.role}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{selectedExperience.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}
