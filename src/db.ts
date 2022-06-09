
import {DataSource} from 'typeorm';
import { User } from "./entities/user";

//typeorm config
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "typeormdb",
    entities: [User],
    synchronize: true, //review changes and upload
    logging: true,// information log
})