const {MongoClient} = require("mongodb");

const url = "DB URL";

const client = new MongoClient(url);

const dbName = "";

async function main(){
    await client.connect();
    console.log("connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("users");
    // console.log("collection ", collection)

    // insert the data
    // const data = {
    //     firstname: "Ranveer",
    //     lastname: "Singh",
    //     city: "Mumbai",
    //     phoneNumber: "987543210",
    //       name: "Ranveer Singh",
    //         email: "rSingh@gmail.com",
    //         password: "Singh@123",
    //         role:"admin"
    //     };
    //     const insertResult = await collection.insertOne(data);
    //     console.log("Inserted documents =>", insertResult)

    // Read
 const findResult = await collection.find({}).toArray();
console.log("Found documents =>", findResult);

// Count the documents from the collection
const countResult = await collection.countDocuments({});
 console.log("Count of documents in the User collection =>", countResult);

 // Find all documents with a filter of name: Deep User
 const result = await collection.find({ name: "Deep User" }).count();
 console.log("result => ", result);

    return "done";

}

main().then(console.log).catch(console.error).finally(()=>client.close())

