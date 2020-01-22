import {promises as fs} from "fs";
import {Animal, ANIMAL_TYPE, Person, PERSON_TYPE, RawJsonObj} from "./category";

async function main() {
    try {
        const jsonBuffer = await fs.readFile("./data.json");
        const jsonObj = JSON.parse(jsonBuffer.toString("utf-8")) as RawJsonObj;

        if (ANIMAL_TYPE === jsonObj.type) {
            const animal = jsonObj.data as Animal;
            console.log(`animal class is: ${animal.class}`);
        } else if (PERSON_TYPE === jsonObj.type) {
            const person = jsonObj.data as Person;
            console.log(`person occupation is: ${person.occupation}`);
        }
    } catch (error) {
        console.log(error);
    }
}

main();
