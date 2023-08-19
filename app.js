import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

let newItems = [];
let newItems2 =[];

app.get("/", (req, res)=>{
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    let day = new Date().toLocaleDateString(undefined,options)
    res.render("index.ejs",{today : day,
        newListItems : newItems
    })
});

app.get("/work",(req,res)=>{
    
    res.render("work.ejs",{today:"work list",
    newListItems2 : newItems2
})
});
app.post("/",(req,res)=>{
    let newItem = req.body.newItem;
    newItems.push(newItem);
    res.redirect("/")
});
app.post("/work",(req,res)=>{
    let newItem2 = req.body.newItem2;
    newItems2.push(newItem2);
    res.redirect("/work")
});



app.listen({port}, () =>{
console.log(`Server up and running on port: ${port}`);
});