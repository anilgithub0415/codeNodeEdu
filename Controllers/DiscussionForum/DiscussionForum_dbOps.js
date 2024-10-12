const getDiscussionForums=(req,res)=>{
  try {
    res.status(200).json("getDiscussionForums")
  } catch (error) {
    res.status(500).json("Internal Server Error")
  }
}

module.exports={getDiscussionForums}