import { HashLink } from "react-router-hash-link";
import { Container,Row,Col ,Button} from "react-bootstrap";

export default function Main () {

    return (
        <main>
            <Container>
                <Row>
                    <Col>
                    <h2>Gallery</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi illo at corporis quibusdam blanditiis architecto error fuga quos assumenda cupiditate accusantium et eos facilis possimus praesentium libero omnis voluptate?</p>
                    <HashLink to= "/#gallery"><Button>See Gallery</Button></HashLink>
                    </Col>
                </Row>
            </Container>
            
        </main>
    )
};
