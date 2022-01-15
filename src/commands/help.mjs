import {  helpMessage } from '../helpers/message.mjs';

function helpCommand(bot){
 
    bot.command('help',(ctx)=>{
        bot.telegram.sendMessage(ctx.chat.id,helpMessage,{parse_mode: 'HTML'})
        ctx.deleteMessage();
    })
};

export {
    helpCommand
}