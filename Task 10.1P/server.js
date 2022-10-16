const express =require("express")
const bodyParser =require("body-parser")
const https = require("https")
const cors = require("cors")

const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cors())

app.get('/',(req,res)=>{
  res.sendFile(__dirname + "/index.html")
})

app.post('/',(req,res)=>{
  const email = req.body.email
  const data = {
    members:[{
      email_address:email,
      status: "subscribed",
      
    }]
  }
  var jsonData = JSON.stringify(data)
  
  const url = "https://us10.api.mailchimp.com/3.0/lists/6ff3510a3f"
  const options={
    method:"POST",
    auth:"ayemohshwe:ae2fd741eaee7cf70e0b591860ba44e8-us10"
  }
  const request = https.request(url,options,function(response)
    {
      response.on("data", function(data){
          console.log(JSON.parse(data))
      })
    })

  request.write(jsonData)
  request.end()
  console.log(email)
  
})

app.listen(3002,function(){
  console.log("Server is running on port 3002")
})