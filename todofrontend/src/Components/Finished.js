import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"


const Finished = ({ list, update }) => {
    const deleteTask = (id) => {
        fetch(`/deleteFin/${id}`).then((res) => res.json()).then((res) => {
            if (res.hasOwnProperty('deleted') && res.deleted) {
                update()
            }
        })
    }

    const view = Object.keys(list).map((element, index) => {
        return <div key={index} className="fix">
            <div className="w60">{list[element]}</div>
            <div className="w35">
                <div>
                    <Button variant="secondary" onClick={() => { deleteTask(element) }} >Delete</Button>
                </div>
            </div>
        </div>
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