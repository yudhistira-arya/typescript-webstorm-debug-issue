export interface Person {
    occupation: string;
}

export const ANIMAL_TYPE = "com.animal";
export const PERSON_TYPE = "com.person";

export interface Animal {
    class: "mammal" | "reptile" | "bird";
}

export interface RawJsonObj {
    type: string;
    data: any;
}