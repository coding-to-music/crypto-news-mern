 function removeKeyboardHearer(bot){
    bot.hears('Remove Keyboard',ctx=>{
        bot.telegram.sendMessage(ctx.chat.id, 'Remove Keyboard',{
            reply_markup:{
                remove_keyboard:true
            }
        })
    });    
};

export {
    removeKeyboardHearer
}