function infoAction(bot){
    bot.action('info',(ctx)=>{
        ctx.answerCbQuery();

        bot.telegram.sendMessage(ctx.chat.id,"Bot Info",{
            reply_markup:{
                inline_keyboard:[
                    [
                        { text: 'Credits', callback_data: 'credit'},
                        { text: 'API', callback_data: 'api'}
                    ],
                    [
                        { text: 'Remove Keyboard', callback_data: 'Remove Keyboard'}
                    ]
                ]
                ,
                    resize_keyboard:true,
                    one_time_keyboard:true
            }
        })
    });   
};

export  {
    infoAction
}

              