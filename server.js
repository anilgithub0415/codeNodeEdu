require('dotenv').config();
const express=require('express')
const app=express()
const PORT=process.env.PORT || 3000;
const cors=require('cors')
const bodyparser=require('body-parser')

app.use('*',cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(express.json())

const DiscussionForumC=require('./Controllers/DiscussionForum/DiscussionForum')
app.use('/api/DiscussionForum',DiscussionForumC)

app.listen(PORT,()=>{
    console.log('node server is on listening at '+PORT)
})