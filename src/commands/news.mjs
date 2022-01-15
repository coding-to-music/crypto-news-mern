import config from '../../config/config.mjs';
import axios from 'axios';
const apikey=config.CRYPTO_INFO_API;

function newsCommand(bot){
    bot.command('news',async (ctx)=>{
        try{
            let res= await axios.get(`https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${apikey}`);
            // console.log(res.data.Data[0]);
    let message=
    `
    <b>Crypto News | Blockchain Enthusiasts</b>
    
    <b color="blue" >${res.data.Data[0].title}</b>\n
    
    ⭐️Follow & share 👉@TerminaroBot.
    
    ${res.data.Data[0].body}.....
    
    🔸url 🔗⬇️
    ${res.data.Data[0].url}
    
    
    <b>Catagories: </b>${res.data.Data[0].categories}
            `;
            ctx.deleteMessage();
            bot.telegram.sendMessage(ctx.chat.id, message,{parse_mode: 'HTML'});
            console.log(message);
        }catch(err){
            throw new Error('Something went wrong while try to fetch data!',err)
        }
    })
};

export {
    newsCommand
}