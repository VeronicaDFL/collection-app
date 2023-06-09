import { HashLink } from "react-router-hash-link";
import { Container,Row,Col ,Button} from "react-bootstrap";

export default function Main () {

    return (
        <main>
            <Container>
                <Row>
                    <Col>
                    <h2>Gallery</h2>
                    <p>Within this collection, you will find a treasure trove of my own handcrafted marine canvas works, each one holding a special place in my heart. Today, I am filled with immense pride as I present them to you through a web application that I personally designed and built. These creations are not just products of my skills, but a testament to the passion and love I pour into every stitch and detail.</p>
                    <HashLink to= "/#gallery"><Button>See Gallery</Button></HashLink>
                    </Col>
                </Row>
            </Container>
            
        </main>
    )
};
