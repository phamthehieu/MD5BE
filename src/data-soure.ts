import "reflect-metadata"
import { DataSource } from "typeorm"
export const AppDataSource = new DataSource({
    url: 'mysql://root:Je6rZGpeGuvC8uWkU6ym@containers-us-west-47.railway.app:7170/railway',
    type: "mysql",
    host: "containers-us-west-47.railway.app",
    port: 7170,
    username: "root",
    password: "Je6rZGpeGuvC8uWkU6ym",
    database: "railway",
    synchronize: true,
    entities: ["dist/src/model/*.js"]
})