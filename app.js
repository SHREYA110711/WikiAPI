const express=require("express");
const ejs=require("ejs");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

const app=express();

app.set('view engine','ejs');

app.use(express.static("public"));


app.use(bodyParser.urlencoded({extended:true}));



mongoose.connect("mongodb://127.0.0.1:27017/WikiDB",{useNewUrlParser:true});

const articleSchema={
    title: String,
    content: String
}
const Article=mongoose.model("Article",articleSchema);


app.route("/articles")

.get((req,res)=>{
    const item= Article.find({});
    
    item.then((x)=>{
      res.send(x);
    })
    .catch((err)=>{
        res.send(err);
    })
    })

   .post((req,res)=>{
    const newArticle=new Article({
        "title":req.body.title,
        "content":req.body.content

    })
    newArticle.save().then(()=>{
        res.send("Successful");
    })
    .catch((err)=>{
        res.send("Failure");
    })
})

.delete((req,res)=>{
    const i=Article.deleteMany({});
    i.then(()=>{
       res.send("Successfully Deleted");
    })
    .catch((err)=>{
      res.send("Failed");
    })
});
 

// for specific request

app.route("/articles/:articleTitle")

.get((req,res)=>{
    const x=Article.findOne({title:req.params.articleTitle});
    x.then((found)=>{
        if(found){
        res.send(found);
        }
        else{
            res.send("No matching found");
        }
    })
    .catch((err)=>{
        res.send(err);
    })
})
.put((req,res)=>{
   Article.updateOne({title:req.params.articleTitle},{title:req.body.title,content:req.body.content})
   .then((found)=>{
    if(found){
    res.send("Successfully Updated");
    }
    else{
        res.send("Not updated!!!");
    }
   })
   .catch((err)=>{
    res.send("error!!")
   })
})

.patch((req,res)=>{
    Article.updateOne({title:req.params.articleTitle},{$set:req.body})
    .then((found)=>{
     if(found){
    //res.send(req.body);
     res.send("Successfully Updated");
     }
     else{
         res.send("Not updated!!!");
     }
    })
    .catch((err)=>{
     res.send("error!!")
    })
})

.delete((req,res)=>{
    Article.deleteOne({title:req.body.title})
    .then(()=>{
       res.send("successfull");
    })
    .catch((err)=>{
      res.send("Failed");
    })
});


app.listen(3000,()=>{
    console.log("server is running");
})