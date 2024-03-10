import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImage from "../assets/images/header-image.png";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDelete, setIsDelete] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const loopWords = [ "1st Year CS Student", "AI-Enthusiast", "Avid Reader"];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker) };
    }, )

    const tick = () => {
        let x = loopNum % loopWords.length;
        let currentText = loopWords[x];
        let newText = isDelete ? currentText.substring(0, text.length - 1) : currentText.substring(0, text.length + 1);


        setText(newText);

        if(isDelete) {
            setDelta(prevDelta => prevDelta/2)
        }
    
        if (!isDelete && newText === currentText) {
            setIsDelete(true);
            setDelta(period);
        } else if(isDelete && newText === '') {
            setIsDelete(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        } 
    }




    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{`Hi, I'm Ananya `}<span className="wrap">{text}</span></h1>
                        <p>I am a first year Computer Science student studying at King's College London. I am keen to cultivate my technical skills to make meaningful contributions towards accessibility in technology.
                            As a self-taught programmer, I have developed a host of problem solving expertise, which I have utilised to contribute towards an array of projects. 
                        </p>
                       
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImage} alt="" />
                    </Col>
                </Row>
            </Container>

        </section>

    )
}

export default Banner;