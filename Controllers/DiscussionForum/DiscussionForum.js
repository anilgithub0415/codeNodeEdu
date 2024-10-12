const express=require('express')
const router=express.Router()

const dbOps=require('./DiscussionForum_dbOps')
router.get('/',dbOps.getDiscussionForums)

module.exports=router