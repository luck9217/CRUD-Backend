
import {DataSource} from 'typeorm';

//typeorm config
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "typeormdb",
    entities: [],
    synchronize: true,
    logging: true,// information log
})