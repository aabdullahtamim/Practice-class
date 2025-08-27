/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

const a: string = "hello";
const b: number = 123;
const c: string[] = ["a", "b", "c"];
const d: number[] = [1, 2, 3, 4];

type TString = string;

const e: TString = "hello world! i am web developer";

// let obj1:object = {
//     name: "Abdullah Tamim ",
//     email: "example@gmail.com",
//     password: "12345",
//     role: "admin",
// }

// enum Role {
//     ADMIN = "ADMIN",
//     USER = "USER"
// }

// type TUser = {
//     name: string,
//     email: string,
//     password: string,
//     role: "admin" | "user"
// }

interface TUser {
    name: string,
    email: string,
    password: string,
    role: "admin" | "user"
}

let obj1: TUser = {
    name: "Abdullah Tamim ",
    email: "example@gmail.com",
    password: "12345",
    role: "admin"
}

let students: TUser = {
    name: "Student",
    email: "abc@gmail.com",
    password: "12345",
    role: "user"

}


let zz: string = "hello world";

// type IStudent = string[];

// type IStudent = Array<string>;

type IStudent<parameter> = Array<parameter>;



let xx: IStudent<string> = ["ab", "cd", "ef"];

let yy: IStudent<number> = [1, 2, 3, 4];

type ICar<T> = Array<T>;

type ICarObj = {
    name: string,
    model: number,
    price: number,
    color: string,

}

let car1: ICar<ICarObj> = [{
    name: "BMW",
    model: 2023,
    price: 200000,
    color: "black"
}]