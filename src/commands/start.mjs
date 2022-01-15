import {  usageMessage, helpMessage } from '../helpers/message.mjs';


function startCommand(bot){
    bot.command('start',ctx=>{
    console.log(ctx.chat);
    let userFirstName=ctx.chat.first_name;
    let startMessage=
   `Welcome  ${userFirstName}.
    we can  provide you cryptocurrency information`;
    ctx.deleteMessage();
    // bot.telegram.sendMessage(ctx.chat.id,usageMessage,{parse_mode: 'HTML'})
    bot.telegram.sendMessage(ctx.chat.id,helpMessage,{
        reply_markup:{
            inline_keyboard:[
                [
                    { text: 'Cryptos Prices', callback_data: 'price'}
                ],
                [
                    { text: 'Binance', url: 'https://www.binance.com'}
                ],
                [
                    { text: 'Bot Info', callback_data: 'info'}
                ]
            ]
        },
        parse_mode: 'HTML'
    })
    })  
};

export {
    startCommand
}