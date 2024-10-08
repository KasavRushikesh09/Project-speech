const mongoose = require("mongoose");
const Chat = require("./models/chat");
main().then(() => {
    console.log("connection successfull");
})
.catch((err) => {
    console.log(err);
});
async function main() {
   await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");    
}

let allChats = [
    {
        from:"neha",
        to:"priya",
        msg:"send me your exam sheets",
        created_at:new Date(),
    },
    {
        from:"mohit",
        to:"vishal",
        msg:"they are brothers",
        created_at:new Date(),
    },
    {
        from:"saurabh",
        to:"sakshi",
        msg:"they are in couple",
        created_at:new Date(),
    },
    {
            from:"rushi",
            to:"geeta",
            msg:"we are friends",
            created_at:new Date(),
    },
];

Chat.insertMany(allChats);