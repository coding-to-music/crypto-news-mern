import config from '../../config/config.mjs';
import axios from 'axios';
import cron from 'node-cron';
const apikey=config.CRYPTO_INFO_API;

// Send News Every hour 
function hourNewsCommand(bot){

    bot.command('hournews',async (ctx)=>{
        await   bot.telegram.sendMessage(ctx.chat.id,`💥💥💥<b>You have now subscribe to Hourly Crypto News  Package.You will receive Cryptocurrency and Blockchain Information Every Hour!</b>💥💥💥`,{parse_mode: 'HTML'});
        try{
            cron.schedule('* * * *',async ()=>{
                let res=await axios.get(`https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${apikey}`);
                // console.log(res.data.Data[0]);
                    let message=
                    `
                    <b>Crypto News | Blockchain Enthusiasts</b>
        
                    <b color="blue" >${res.data.Data[0].title}</b>\n
        
                    ⭐️Follow & share 👉@TerminaroBot.
        
                    ${res.data.Data[0].body}
        
                    🔸url 🔗⬇️
                    ${res.data.Data[0].url}
        
        
                    <b>Categories: </b>${res.data.Data[0].categories}
                            `;
                //  ctx.deleteMessage();
                console.log(message);
                bot.telegram.sendMessage(ctx.chat.id,message,{parse_mode: 'HTML'});
                console.log('Process running every minute');
            });
        }catch(err){
          console.log(err);
        }
    })

};

export {
    hourNewsCommand
}