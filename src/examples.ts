let str: string = '123';
type someJSTypes = null | undefined | string | number | object | symbol | bigint | void;
const data: someJSTypes = null; 

const arrayOne: number[] = [12, 34];
const arrayTwo: Array<string> = ['12', '34'];
const tuple: [null, undefined, symbol] = [null, undefined, Symbol()];

// ---------------------------

const objWithTypes: {
  name: string,
  age: number | string,
  town?: string
} = {
  name: 'Dima',
  age: 0
};

// ---------------------------

type ObjType = {
  name: string,
  age: number | string,
  town?: string
};
const objWithTypesByALias: ObjType = {
  name: 'Dima',
  age: 0
};

interface ObjInterface {
  readonly name: string,
  age: number | string,
  town?: string
};
const objWithTypesByInterface: ObjInterface = {
  name: 'Oleg',
  age: 1
};

interface IndexInterface {
  [k: string]: void
};
const objWithTypesByIndexInterface: IndexInterface = {
  value: undefined
};

// ---------------------------

enum MethodEnum {
  add,
  sub,
  div
}

function mathOperation(method: MethodEnum, a: number, b: number): number {
  switch (method) {
    case MethodEnum.add:
      return a + b;
    case MethodEnum.sub:
      return a - b;
    case MethodEnum.div:
      return a / b;
  }
}

mathOperation(MethodEnum.add, 1, 2);

type TypeFn = (value: any) => void;
const foo: TypeFn = (value) => console.log(value);

// ---------------------------


function returnAttr<T>(value: T): T {
  return value;
}

interface MyArray<T> {
  // @ts-ignore
  [N: number]: T,
  map<U>(cb: (item: T) => U): U[]
}

const arrayOfString: MyArray<string> = ['123', '456'];
arrayOfString.map(item => item + 1);
arrayOfString.map(item => item.toString());

function getLength<T extends any[]>(value: T): number {
  return value.length;
}