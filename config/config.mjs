import dotenv from 'dotenv';
dotenv.config();

const config={
    BOT_API:process.env.BOT_API,
    CRYPTO_INFO_API:process.env.CRYPTO_INFO_API
}

export default config;