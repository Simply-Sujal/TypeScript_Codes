"use strict";
// --------- DataTypes ----------
// let a: Number = 25;
// let nam: String = "Sujal";
// console.log(a);
// console.log(nam);
// let namua = <string>"varun";
// console.log(namua);
// this shows the union type either you can type string or number
// let surName: String | Number;
// surName = "Hello";
// surName = 23;
// console.log(surName);
// const func = (n: number, m: number): number => {
//   console.log(n, m);
//   return n * m;
// };
// types
// type a = String;
// let x: a = "Suj";
// console.log(x);
// type userName = (m: string, n: string) => string;
// const q: userName = (m, n) => {
//   return m + n;
// };
// console.log(q("sus", "hel"));
// --------- Arrays In TS -------------
// type firstArr = number[];
// type secondArr = string[];
// const arr1: firstArr = [12, 3, 2];
// const arr2: secondArr = ["sus", "he"];
// const arr3: string[] = ["sus", "he"];
// const arr4: Array<string> = [];
// const arr5: Array<string | number> = ["sh", 32, "sdk", 89];
// console.log(arr1);
// console.log(arr2);
// console.log(arr5);
// ------- objects --------
// type Obj = {
//   height: number;
//   weight: number;
//   gender?: boolean;
// };
// interface Obj {
//   height: number;
//   weight: number;
//   gender?: boolean;
// }
// type funType = (m: number, n: number) => void;
// interface newObj extends Obj {
//   isMale: boolean;
//   func: funType;
// }
// const hell: newObj = {
//   height: 89,
//   weight: 72,
//   isMale: true,
//   func: (n, m) => {
//     console.log(n * m);
//   },
// };
// const kendal: newObj = {
//   height: 89,
//   weight: 24,
//   isMale: false,
//   func: (n, m) => {
//     console.log(n * m);
//   },
// };
// console.log(kendal.func(20, 30));
// // console.log(hell);
// const obj: Obj = {
//   height: 78,
//   weight: 89,
//   gender: true,
// };
// const obj1: Obj = {
//   height: 78,
//   weight: 89,
// };
// console.log(obj);
// console.log(obj.gender);
// -------- Function in TS ---------
