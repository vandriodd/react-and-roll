import PocketBase from "pocketbase";

const db = new PocketBase("http://127.0.0.1:8090");

db.autoCancellation(false);

db.authStore.save(process.env.POCKETBASE_KEY!);

console.log(await db.collection("notes").getList());
