//require('dotenv').config({path: './.env'});
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import mongodbConnection from './db/index.js';

mongodbConnection();

/*
import express from 'express';

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on('error', () => {
      console.log('ERROR: ', error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('ERROR: ', error);
    throw error;
  }
})();
*/
