function priceAction (bot){
    bot.action('price',ctx=>{
        let priceMessage=`Get Price information. Select One of the cryptocurrencies below`;
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.chat.id,priceMessage,{
            reply_markup:{
                inline_keyboard:[
                    [
                        {text: 'BTC', callback_data: 'price-BTC'},
                        {text: 'ETH', callback_data: 'price-ETH'},
                        {text: 'ATOM', callback_data: 'price-ATOM'},
                        {text: 'NEAR', callback_data: 'price-NEAR'}
                    ],
                    [
                        {text: 'BCH', callback_data: 'price-BCH'},
                        {text: 'LTC', callback_data: 'price-LTC'},
                        {text: 'LUNA', callback_data: 'price-LUNA'},
                        {text: 'DOGE', callback_data: 'price-DOGE'}
                    ],
                    [
                        {text: 'SHIB', callback_data: 'price-SHIB'},
                        {text: 'FTM', callback_data: 'price-FTM'},
                        {text: 'BNB', callback_data: 'price-BNB'},
                        {text: 'TRX', callback_data: 'price-TRX'}
                    ],
                    [
                        {text: 'Back to Menu', callback_data: 'start'}
                    ]
                ]
            }
        })
    });
};

export {
    priceAction
}