const express = require('express');
const bodyParser = require('body-parser');
const { request, response } = require('express');
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const users = [
    {
        id: 0,
        username: "user1",
    },
    {
        id:1,
        username: "user2",
    },
    {
        id:2,
        username: "user3",
    },
]

/*app.get("/", (req,res) =>{
    res.send("<h1> arif</h1>");
});*/

// CRUD METHODS

// CREATE
app.post("/create",(req,res)=>{
   const user=req.body;
   users.push(user);
res.send('kullanıcı  eklendi');

});

// READ (GET)
/**.......... CODE HERE */
app.get("/",(req,res)=>{
    res.send(users);
});

// UPDATE (PUT)
/*...CODE ....*/
app.patch("/update",(req,res)=>{
    const update=req.params.user;
    const patch = users.filter((user)=>user.username!=req.body.username);
    console.log(patch);
    res.send("kullanıcı değiştirildi");
});


// DELETE (DELETE)
/* .... CODE */
app.delete("/delete", (req,res)=>{
    const deleted = users.filter((user)=>user.username!=req.body.username);
    console.log(deleted);
    res.send('kullanıcı id silindi');

});


app.listen(3000, ()=> {
    console.log("3000 port dinleniyor");
}); 