import express from 'express'
import path from 'path'
const app = express()
const PORT = 3006;

const pathFile = path.resolve()
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(pathFile,"public",'style.html'))
})
app.get('/about',(req,res)=>{
    res.send('welocme to about page')
})
app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})