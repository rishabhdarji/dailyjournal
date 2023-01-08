//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = 'Welcome to the "Daily Journal" website! This is a place where you can come to reflect on your daily thoughts, experiences, and emotions.'+
"Our mission is to provide a platform for individuals to express themselves freely and honestly. We believe that writing in a journal can be therapeutic and help you process your thoughts and feelings in a healthy way."+ 
"On this website, you will find a variety of journal entry prompts to inspire and guide your writing. These prompts are meant to help you delve deeper into your own thoughts and emotions, and can be customized to fit your specific needs and preferences." +
"We also offer a private and secure platform for you to write your journal entries. Your entries will be kept confidential and can only be accessed by you. We believe that your journal should be a safe space where you can be vulnerable and express yourself without fear of judgment."+
"We hope that this website can serve as a tool for self-exploration and personal growth. We encourage you to take some time each day to write in your journal and reflect on your experiences. Happy journaling!"

const contactContent = "Welcome to our contact page! We appreciate your interest in our daily journal website."+
"If you have any questions, comments, or concerns about our website or the journal entries that are written on it, please feel free to reach out to us using the form below. We will do our best to respond to all inquiries as promptly as possible."+
"Please note that we are unable to respond to requests for personal journal entries or to provide specific information about individual contributors. If you have a question or concern about a specific journal entry, please use the comment section provided on that entry's page."+
"We hope you enjoy reading our daily journal entries and we look forward to hearing from you!"

"\nSincerely,"+

"The Daily Journal Team"
const posts = [];

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
  res.render("home",{
    homeStartingContent:homeStartingContent,
    posts:posts
  });
})

app.get("/about", function(req,res){
  res.render("about",{aboutContent:aboutContent});
})
app.get("/contact", function(req,res){
  res.render("contact",{contactContent:contactContent});
})
app.get("/compose", function(req,res){
  res.render("compose");
})

app.post("/compose", function(req,res){
  const titleOfForm = req.body.titleOfForm;
  const textOfForm = req.body.textOfForm;
  const post = {
    title: req.body.titleOfForm,
    content: req.body.textOfForm
  };
  
  posts.push(post);
  res.redirect("/");
});




app.listen(3000, function() {
  console.log("Server started on port 3000");
});
