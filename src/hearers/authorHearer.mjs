function authorHearer(bot){
    bot.hears('Credits',ctx=>{
        ctx.reply('This bot was made by @thomas');
    });    
};

export {
    authorHearer
}