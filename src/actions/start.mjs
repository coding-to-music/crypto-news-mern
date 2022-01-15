import {  helpMessage } from '../helpers/message.mjs';

 function startAction(bot){
    bot.action('start',ctx=>{
        ctx.deleteMessage();
       bot.telegram.sendMessage(ctx.chat.id,helpMessage,{parse_mode: 'HTML'})
    });    
};

export {
    startAction
}