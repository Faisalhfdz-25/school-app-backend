import { Sequelize } from "sequelize";

import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Student = db.define(
    "students",
    {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        age: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        gender: DataTypes.STRING,
    },
    {
        freezeTableName: true,
    }
);

export default Student;

(async () => {
    await db.sync();
})();