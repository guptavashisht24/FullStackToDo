const express = require('express')
const app = express()
const port = 5000
let ID = 0
const toDoStorage = {
    finished: {

    },
    pending: {

    }
}

app.use(express.json());


app.get('/finish/:id', (req, res) => {
    const key = req.params.id
    if (toDoStorage.pending.hasOwnProperty(key)) {
        const text = toDoStorage.pending[key]
        toDoStorage.finished[key] = text
        if (delete toDoStorage.pending[key])
            res.send({ finished: true, toDoStorage })
        else
            res.send({ finished: false, toDoStorage: {} })
    } else {
        res.send({ finished: false, toDoStorage: {} })
    }

})

app.get('/delete/:id', (req, res) => {
    const key = req.params.id
    if (toDoStorage.pending.hasOwnProperty(key)) {
        delete toDoStorage.pending[key]
        res.send({ deleted: true, toDoStorage })
    } else {
        res.send({ deleted: false, toDoStorage: {} })
    }
})

app.post('/add', (req, res) => {
    const { text = "" } = req.body
    if (text) {
        toDoStorage.pending[ID] = text
        ID += 1
        res.send({ inserted: true, toDoStorage })
    } else {
        res.send({ inserted: false, toDoStorage: {} })
    }

})


app.get('/', (req, res) => {
    res.send(toDoStorage)
})


app.listen(port, () => {
    console.log(`ToDo app listening at http://localhost:${port}`)
})