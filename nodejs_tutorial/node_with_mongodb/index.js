const { MongoClient } = require("mongodb");

const URL = "mongodb+srv://rakibultowhid88_db_user:8XMiNk2uB5xVUS2@cluster0.hlxgjmq.mongodb.net/school?appName=Cluster0";

async function connectDB() {
    const myMongoClient = new MongoClient(URL);

    try {
        await myMongoClient.connect();
        console.log("Connected successfully");

        // await insertData(myMongoClient);
        // await DeleteOneItem(myMongoClient);
        // await DeleteAllItems(myMongoClient);
        // await FindOneWithoutCondition(myMongoClient);
        // await FindOneWithCondition(myMongoClient);
        // await FindAllData(myMongoClient);
        // await FindAllDataByProjection(myMongoClient);
        // await FindNameAndRollByProjection(myMongoClient);
        // await FindAllDataByQuery(myMongoClient);
        // await FindDataByLimit(myMongoClient);
        // await FindAllDataBySort(myMongoClient);
        // await UpdateMyData(myMongoClient);
        // await CreateNewCollection(myMongoClient);
        // await DeleteNewCollection(myMongoClient);



    } catch (error) {
        console.log("Connection failed");
        console.error(error);
    } finally {
        await myMongoClient.close();
    }
}

async function insertData(myMongoClient) {
    try {
        const myDataBase = myMongoClient.db("school");
        const myCollection = myDataBase.collection("students");
        const myData = {
            name: "Rakibul",
            roll: 5,
            class: 12,
            city: "Dhaka"
        };

        const result = await myCollection.insertOne(myData);

        console.log("Data inserted successfully");
        console.log("Inserted ID:", result.insertedId);
    } catch (error) {
        console.log("Data insert failed");
        console.error(error);
    }
}

async function DeleteOneItem(myMongoClient) {
    try {
        const myDataBase = myMongoClient.db("school");
        const myCollection = myDataBase.collection("students");
        const result = await myCollection.deleteOne({ roll: 1 });

        if (result.deletedCount === 1) {
            console.log("Deleted successfully");
        } else {
            console.log("No document found with roll: 1");
        }
    } catch (error) {
        console.log("Delete failed");
        console.error(error);
    }
}

async function DeleteAllItems(myMongoClient) {
    try {
        const myDataBase = myMongoClient.db("school");

        const myCollection = myDataBase.collection("students");

        const result = await myCollection.deleteMany({});

        console.log(`Data deleted successfully. Total deleted: ${result.deletedCount}`);
    } catch (error) {
        console.log("Delete failed");
        console.error(error);
    }
}


async function FindOneWithoutCondition(myMongoClient) {
    try {
        const myDataBase = myMongoClient.db("school");
        const myCollection = myDataBase.collection("students");
        const result = await myCollection.findOne({});

        console.log(result);
    } catch (error) {
        console.log("Find failed");
        console.error(error);
    }
}


async function FindOneWithCondition(myMongoClient) {
    try {
        const myDataBase = myMongoClient.db("school");
        const myCollection = myDataBase.collection("students");
        const findObj = { roll: 5 };
        const result = await myCollection.findOne(findObj);

        console.log(result);
    } catch (error) {
        console.log("Find failed");
        console.error(error);
    }
}

async function FindAllData(myMongoClient) {
    try {
        const myDataBase = myMongoClient.db("school");
        const myCollection = myDataBase.collection("students");
        const result = await myCollection.find().toArray();
        console.log(result);

        return result;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


async function FindAllDataByProjection(myMongoClient) {
    try {
        const myDataBase = myMongoClient.db("school");
        const myCollection = myDataBase.collection("students");

        const result = await myCollection.find(
            {},
            {
                projection: {
                    roll: 1,
                    _id: 0
                }
            }
        ).toArray();

        console.log(result);

    } catch (error) {
        console.log("Find failed");
        console.error(error);
    }

}


async function FindNameAndRollByProjection(myMongoClient) {
    try {
        const myDataBase = myMongoClient.db("school");
        const myCollection = myDataBase.collection("students");

        const result = await myCollection.find(
            {},
            {
                projection: {
                    name: 1,
                    roll: 1,
                    _id: 0
                }
            }
        ).toArray();

        console.log(result);

    } catch (error) {
        console.log("Find failed");
        console.error(error);
    }
}

async function FindAllDataByQuery(myMongoClient) {
    try {
        const myDataBase = myMongoClient.db("school");
        const myCollection = myDataBase.collection("students");

        const query = { city: "Khulna" };

        const result = await myCollection.find(query).toArray();

        console.log(result);
    } catch (error) {
        console.log("Find failed");
        console.error(error);
    }
}

async function FindDataByLimit(myMongoClient) {
    try {
        const myDataBase = myMongoClient.db("school");
        const myCollection = myDataBase.collection("students");

        const result = await myCollection.find({}).limit(3).toArray();

        console.log(result);

    } catch (error) {
        console.log("Find failed");
        console.error(error);
    }
}

async function FindAllDataBySort(myMongoClient) {
    try {
        const myDataBase = myMongoClient.db("school");
        const myCollection = myDataBase.collection("students");

        const result = await myCollection.find({})
            .sort({ class: 1 }) // for descending order use (-)minus.
            .toArray();

        console.log(result);
    } catch (error) {
        console.log("Find failed");
        console.error(error);
    }
}

async function UpdateMyData(myMongoClient) {
    try {
        const myDataBase = myMongoClient.db("school");
        const myCollection = myDataBase.collection("students");

        const myQuery = { roll: 10 };

        const myNewValues = {
            $set: {
                name: "Rakibul Islam",
                roll: 1
            }
        };

        const result = await myCollection.updateOne(myQuery, myNewValues);

        if (result.matchedCount > 0) {
            console.log("Data updated successfully.");
            console.log("Modified Count:", result.modifiedCount);
        } else {
            console.log("No document found with roll: 10");
        }

    } catch (error) {
        console.log("Update failed");
        console.error(error);
    }
}

async function CreateNewCollection(myMongoClient) {

    try {
        const myDataBase = myMongoClient.db("school");
        await myDataBase.createCollection("teachers");

        console.log("Teachers collection created successfully.");

    } catch (error) {
        console.log("Collection creation failed");
        console.error(error);
    }
}

async function DeleteNewCollection(myMongoClient) {
    try {
        const myDataBase = myMongoClient.db("school");

        await myDataBase.collection("teachers").drop();

        console.log("Teachers collection deleted successfully.");
    } catch (error) {
        console.log("Collection deletion failed");
        console.error(error);
    }
}

connectDB();