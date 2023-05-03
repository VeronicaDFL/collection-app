
import { Container,Row ,Col} from "react-bootstrap";
import Panel from "./Panel.jsx";
import data from "../../data/boatCovers.json";


export default function List() {


    return(
        <section>
            <Container id="gallery" >
                <Row>
                    <Col><h2 className="text-center">My Collection</h2></Col>
                </Row>



            <Row className= "justify-content-center">
            {
                data.map(
                    (element)=>(
                        element
                        ?  <Panel  data={element}/>
                        : <p>Loading...</p>
                   

                   )
                )
            }
            </Row>
        </Container>
        </section>
    )
}