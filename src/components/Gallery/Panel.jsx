import { Col, Card, Image } from "react-bootstrap"
export default function Panel ({data: {id,model,type,material,color,description,image }}) {

    return (
        <Col key={id} sm={10} md={6} lg={4}>
        <Card className= "p-3">
            <figure>
                <img src={process.env.PUBLIC_URL + "images/"} alt="The Background" />
               
            </figure>
            <div className= "content">
        <h3>{model}</h3>
        <p>{type}</p>
        </div>
        </Card>
        </Col>
    )
}