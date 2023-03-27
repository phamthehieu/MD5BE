import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "containers-us-west-52.railway.app",
    port: 6813,
    username: "root",
    password: "dDKqjA9jXRG98YoVD1Av",
    database: "railway",
    synchronize: true,
    entities: ["dist/src/model/*.js"]
})