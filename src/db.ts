
import {DataSource} from 'typeorm';

//typeorm config
const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "test",
    entities: [],
    synchronize: true,
    logging: false,
})