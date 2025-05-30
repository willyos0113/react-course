export {};

// 1. primitive types
// 1.1. number
const age: number = 23;
console.log(age);
const isOver18: boolean = age > 18;
// 1.2. string
const str: string = "test";
// const str23: number = str + 23;
// 1.3. boolean
const isMarried: boolean = false;
// const isMarried: boolean = 123;

// 2. Array
// 2.1. number array
const numArr: number[] = [1, 2, 3];
const numArr2: Array<number> = [1, 2, 3];
// const numArr3: Array<number> = [1, 2, "str"];
// 2.2. string array
const strArr: string[] = ["1", "2", "3"];
// 2.3. 2d array
const arr2d: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
// 2.4. Map() or key-value pairs
const nameHeightPair: [string, number] = ["yiwei", 165];
const nameHeightPairs: [string, number][] = [
  ["yiwei", 165],
  ["chris", 180],
];
const nameHeight = new Map(nameHeightPairs);
console.log(nameHeight);

// 3. Object
// 3.1. 物件屬性數量已知 (interface)
// interface Profile {
//   name: string;
//   phone: string;
//   email: string;
//   age: number;
//   gender: string;
//   isMarried?: boolean;
// }
// const chrisProfile: Profile = {
//   name: "chris",
//   phone: "213-456-789",
//   email: "chris@gmail.com",
//   age: 23,
//   gender: "male",
// };
// 3.2. 物件屬性不定量
const height: { [name: string]: number } = {
  chris: 180,
  Emily: 165,
};
// 3.3. 物件屬性不定量，另一種表達方式
const height2: Record<string, number> = {
  yiwei: 165,
  william: 180,
};

// 4. Map() 型態
const height3: Map<string, number> = new Map([
  ["yiwei", 165],
  ["william", 180],
]);
console.log(height3);

// 5. type
// 5.1. 重新命名型態
type Str = string;
const str2: Str = "123";
// 5.2. 型態聯集
type MyType = string | number;
const myVal: MyType = 123;

// 6. enum
// enum Gender {
//   FEMALE = "female",
//   MALE = "male",
// }
// const gender: Gender = Gender.FEMALE;
// console.log(Gender);

// 7. function
const strLen = (str: string): number => str.length;
const strShow = (str: string): void => {
  console.log(str);
}
strShow('abc');
const strLenAsyc = async(str: string): Promise<string> => Promise.resolve(str);
console.log(strLenAsyc('abc'));

// 8. any, unknown, never
// 8.1. any 的意義，請 ts 先不要檢查字串型態
isNaN('123' as any);
// 8.2. unknown 的意義，變數使用前強迫要先檢查型態
const fn = (k: unknown)=>{ 
  if(typeof k === 'number') return k + 123;
  if(typeof k === 'string') return k.length;
}
// 8.3. never 的意義，代表永遠沒有的程式碼
const fnNever = (): never =>{
  while(true) {
    // return 0;
  }
}
type MyType2 = number & string; // 就是一個 never

// 9. module
import { getWelcomeMessage, Profile } from './Profile';
import { Gender } from './Profile';

const gender: Gender = 'male';

const yiweiProfile: Profile = {
  name: 'yiwei',
  email: 'yiwei@gmail.com',
  phone: '0987654321',
  gender: gender,
  age: 23,
  isMarried: false,
}
console.log(getWelcomeMessage(yiweiProfile));