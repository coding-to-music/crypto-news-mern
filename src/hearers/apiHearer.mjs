function apiHearer(bot){
    bot.hears('api',ctx=>{
        ctx.reply('This bot uses cryptocompare API');
    });
};

export {
    apiHearer
}