module.exports=(app)=>{

    var data=['adi','yogi','narendra','modi','rajnath']

    app.get('/',(req,res)=>{
        res.render('home',{wish:data});
    })

    app.get('/about',(req,res)=>{
        res.render('about',{data:data})
    })
    
    app.post('/sent',(req,res)=>{
        console.log(req.body.item)
        data.push(req.body.item)
        res.send(data)
    })

    app.delete('/remove/:id',(req,res)=>{
            data=data.map(item=>{
                if(item!=req.params.id){
                    return item
                }
            })
            console.log("asdf",req.params.item)
            res.send(data);
    })
}
