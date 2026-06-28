const mysql = require('mysql');

const DbConnectionConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "school"
};

const con = mysql.createConnection(DbConnectionConfig);

con.connect((error) => {
    if (error) {
        console.log("Connection Failed");
        console.error(error);
    } else {
        console.log("Connected Successfully...");
        // InsertData(con);
        // DeleteDataByID(con);
        // UpdateData(con);
        // SelectData(con);
    }
});

function InsertData(con) {
    let SQLQuery = "INSERT INTO `students_list`(`name`, `class`, `city`) VALUES ('Tamim', '10', 'Barisal')";
    
    con.query(SQLQuery, function (error) {

        if (error) {
            console.log("Data insert failed!!!");
            console.error(error);
        } else {
            console.log("Data insert success...");
        }
    });
}

function DeleteDataByID(con) {
    let SQLQuery = "DELETE FROM `students_list` WHERE `id` = 2";

    con.query(SQLQuery, function (error) {

        if (error) {
            console.log("Data delete failed!!!");
            console.error(error);
        } else {
            console.log("Data delete success...");
        }
    });
}

function UpdateData(con) {

    let SQLQuery = "UPDATE `students_list` SET `city`='Dhaka' WHERE `id`=3";

    con.query(SQLQuery, function (error) {

        if (error) {
            console.log("Data update failed!!!");
            console.error(error);
        } else {
            console.log("Data update success...");
        }
    });

}

function SelectData(con) {
    let SQLQuery = "SELECT * FROM `students_list`";

    con.query(SQLQuery, function (error, result) {
        if (error) {
            console.log("Data Select Fail");
            console.error(error);
        } else {
            console.log(result);
        }
    });
}