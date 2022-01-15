import React from "react";
import Container from "react-bootstrap/Container";


const Finished = ({list}) => {
    const view = Object.keys(list).map((element, index)=>{
        return <div key = {index}>{list[element]}</div>
    })
    return (<>
        <div>
            <Container className="container">
                <h3>Finished Tasks</h3>
                {view}
            </Container>
        </div>
    </>)
}

export default Finished;