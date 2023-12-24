// let data=require("./practice")
// data.practice()

let myexpress=require("express")
let app=myexpress();

let users=[];
app.use(myexpress.json());
app.listen(6070,function(){
    console.log("code is working")
})

app.delete('/delete_user',(req,res)=>{
    users.splice(req.query.q, 1);
    res.json({
        success:true
    })
})

app.get('/user_loa',(req,res)=>{
    res.json(users);
})
app.post('/create_users',(req,res)=>{
    console.log(req.body)
    users.push(req.body)
    console.log([...users])
})