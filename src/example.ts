'use strict';

// -------- Task 1

function concat(firstStr: string, secondStr: string): string {
  return `${firstStr} ${secondStr}`;
}

concat('Hello ', 'World') // -> Hello World;

// -------- Task 2

interface MyHometaskStrictTypes {
  howIDoIt: string,
  simeArray: [string, string, number],
  withData: [
    {
      howIDoIt: string,
      simeArray: [string, number]
    }
  ]
}

interface MyHometaskScaleTypes {
  [k: string]:
    string | 
    (string | number)[] | 
    {[k: string]: string | any[]}[]
}

interface MyHometaskCommonTypes {
  [k: string]: string | [] | {}[]
}

type MyHometaskType = MyHometaskStrictTypes | MyHometaskScaleTypes | MyHometaskCommonTypes;


const MyHometask: MyHometaskType = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// -------- Task 3

interface MyArray<T> {
	[N: number]: T,

	reduce<U>(fn: (acc: U, item: T) => U, initialvalue?: U): U;
}

const arr: MyArray<number> = [1, 2, 3, 4]

const valueByReduce = arr.reduce(
  (acc, item) => acc + item,
  0
);
console.log(valueByReduce);
