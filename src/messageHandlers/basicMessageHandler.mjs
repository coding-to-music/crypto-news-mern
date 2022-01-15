 function greetingsMessageHandler(bot){
    bot.hears(['hi','Hi','Hello','Salut','salut','Hello bot','bro','Hello!'],(ctx)=>{
const message=`
Hello <b>${ctx.message.from.first_name}</b>!
I can provide you information about any cryptocurrency in your choice.
Use: /coininfo to get price information about coin.
<b>Example: </b>
For getting information about Bitcoin (BTC) you should enter this command: /btcinfo
`
bot.telegram.sendMessage(ctx.chat.id,message,{parse_mode: 'HTML'})  

}) ;
    
};

export {
    greetingsMessageHandler
}