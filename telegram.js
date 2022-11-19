const { Telegraf } = require('telegraf');
var mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
/*var uri = 'mongodb+srv://manishankar:Newpassword123@cluster0.ii5gstz.mongodb.net/Telegram';
mongoose.connect(uri);

var collection = new mongoose.Schema({
    Recency : {type : String},
    Frequency : String,
    Monetary: String,
    Time : String
});
var mod1 = mongoose.model('mod', collection);*/
const bot = new Telegraf('5316517041:AAGy4YlX1bCHuib58F71tbvgD9n0uOpT3a4');
bot.start((msg) => {
    msg.reply("Welcome")
})
bot.hears('hi' , (msg) => {
    msg.reply("This is help");
});
bot.hears("inline", (ctx) => {
    ctx.reply("Hi there!", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: "Button 1", callback_data: 'btn1' }, { text: "Button 2", callback_data: "btn-2" } ],

                /* One button */
                [ { text: "Next", callback_data: "next" } ],
                
                /* Also, we can have URL buttons. */
                [ { text: "Open in browser", url: "telegraf.js.org" } ]
            ]
            
        }

        
    });
   

});

bot.action('btn1', ctx => {
    ctx.reply('This is buttin one');
    
    
    


});


bot.action('btn-2', ctx => {
    ctx.reply('This is button two');
    ctx.telegram.sendDocument(ctx.chat.id, {source : "C:/Users/manis/OneDrive/Documents/Results.pdf"})
    
    mod1.find({}).then((data)=>{
        console.log(data);
        
    });
   
});
bot.command('get',ctx => {
    ctx.telegram.sendDocument(ctx.chat.id, {source : "C:/Users/manis/OneDrive/Documents/Results.pdf"})
    
})


bot.launch()