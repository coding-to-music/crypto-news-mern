import axios from 'axios';
import config from '../../config/config.mjs';

const apikey=config.CRYPTO_INFO_API;

let topCoinList=['price-BTC','price-ETH','price-BCH','price-LTC','price-ATOM','price-LUNA','price-','price-BNB','price-FTM','price-DOGE', 'price-NEAR','price-SHIB','price-FTM', 'price-TRX'];

function topCoinAction (bot){
    bot.action(topCoinList,async ctx=>{
        console.log(ctx);
        let symbol= ctx.match.input.split('-')[1];  
        console.log(symbol);
        try{
            let res=await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD&api_key=${apikey}`);
            let data=res.data.DISPLAY[symbol].USD;
            // console.log(data);
let message=
 `
<b>Price of ${symbol} at ${new Date().toLocaleDateString()}:</b>

<b>Symbol: </b>  ${symbol},
<b>Price: </b> ${data.PRICE},
<b>Last Volume: </b> ${data.LASTVOLUME},
<b>Last Volume to: </b> ${data.LASTVOLUMETO},
<b>Open: </b>  ${data.OPENDAY},
<b>High: </b>  ${data.HIGHDAY},
<b>Low: </b> ${data.LOWDAY},
<b>Market: </b> ${data.MARKET},
<b>Last Market: </b> ${data.LASTMARKET},
<b>Volume Hour: </b> ${data.VOLUMEHOUR},
<b>Volume Hour To: </b> ${data.VOLUMEHOURTO},
<b>Open Hour: </b> ${data.OPENHOUR}
            `;
    
            ctx.deleteMessage();
            bot.telegram.sendMessage(ctx.chat.id, message ,{
                reply_markup:{
                    inline_keyboard:[
                        [
                            {text: 'Back to Price', callback_data: 'price'}
                        ]
                    ]
                },
                    parse_mode: 'HTML'
            });
    
        }catch(err){
            throw new Error('Error while fetching cryptocurrency data',err);
        }
    });
};

export {
    topCoinAction
}