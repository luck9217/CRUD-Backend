import "reflect-metadata";

import app from "./app";
import {AppDataSource} from './db';

async function main() {

    try {
        //Data base postgres initialize
        await AppDataSource.initialize();
        console.log("Database Connected");
    
        //try localserver
        
        app.listen(3000);
        console.log('Sever is listening on port',3000);
        
    } catch (error) {

        console.log(error);
        
    }

    
}

main();


