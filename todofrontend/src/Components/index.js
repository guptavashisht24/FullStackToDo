import React, { useState, useEffect } from 'react';
import Pending from "./Pending"
import Finished from './Finished';
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

const AddTask = () => {

    const [text, updateText] = useState("")
    const [data, updateData] = useState({ pending: {}, finished: {} })

    useEffect(() => { getData() }, [])


    const getData = () => {
        fetch("/list").then((res) => res.json()).then((res) => {
            if (res.hasOwnProperty('finished') && res.hasOwnProperty('pending')) {
                updateData(res)
            }
        })
    }

    const addTasks = () => {
        if (text) {
            fetch('/add', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text })
            }).then(res => res.json()).then(res => {
                if (res && res.hasOwnProperty('inserted') && res.inserted) {
                    getData(res)
                }
            });
        }
    }

    const { pending, finished } = data

    return (<>
        <div className='ma'>
            <div className="mw360">
                <InputGroup className="mb-3 mw360">
                    <FormControl
                        placeholder="Add Task"
                        value={text}
                        onChange={(e) => { updateText(e.target.value) }}
                    />
                    <Button variant="primary" onClick={addTasks}>Add Task</Button>
                </InputGroup>
            </div>
            <div className="content">
                <div className="w40">
                    <Pending list={pending} update={getData} />
                </div>
                <div className="w40">
                    <Finished list={finished} update={getData} />
                </div>
            </div>
        </div>
    </>)
}

export default AddTask