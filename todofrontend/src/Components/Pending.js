import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"




const Pending = ({ list, update }) => {
    const view = Object.keys(list).map((element, index) => {
        return <div key={index} className="fix">
            <div className="w60">{list[element]}</div>
            <div className="w35">
                <div>
                    <Button variant="primary" onClick={() => { finishTask(element) }} >Finish</Button>{' '}
                    <Button variant="secondary" onClick={() => { deleteTask(element) }} >Delete</Button>
                </div>
            </div>
        </div>
    })

    const finishTask = (id) => {
        fetch(`/finish/${id}`).then((res) => res.json()).then((res) => {
            if (res.hasOwnProperty('finished') && res.finished) {
                update()
            }
        })
    }

    const deleteTask = (id) => {
        fetch(`/delete/${id}`).then((res) => res.json()).then((res) => {
            if (res.hasOwnProperty('deleted') && res.deleted) {
                update()
            }
        })
    }
    return (<>
        <div>
            <Container className="container">
                <h3>Pending Tasks</h3>
                {view}
            </Container>
        </div>
    </>)
}

export default Pending;