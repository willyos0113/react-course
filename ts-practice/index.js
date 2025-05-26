// 1. primitive types
// 1.1. number
var age = 23;
console.log(age);
var isOver18 = age > 18;
// 1.2. string
var str = "test";
// const str23: number = str + 23;
// 1.3. boolean
var isMarried = false;
// const isMarried: boolean = 123;
// 2. Array
// 2.1. number array
var numArr = [1, 2, 3];
var numArr2 = [1, 2, 3];
// const numArr3: Array<number> = [1, 2, "str"];
// 2.2. string array
var strArr = ["1", "2", "3"];
// 2.3. 2d array
var arr2d = [
    [1, 2, 3],
    [4, 5, 6],
];
// 2.4. Map() or key-value pairs
var nameHeightPair = ["yiwei", 165];
var nameHeightPairs = [
    ["yiwei", 165],
    ["chris", 180],
];
var nameHeight = new Map(nameHeightPairs);
console.log(nameHeight);
var chrisProfile = {
    name: "chris",
    phone: "213-456-789",
    email: "chris@gmail.com",
    age: 23,
    gender: "male",
};
// 3.2. 物件屬性不定量
var height = {
    chris: 180,
    Emily: 165,
};
// 3.3. 物件屬性不定量，另一種表達方式
var height2 = {
    yiwei: 165,
    william: 180,
};
// 4. Map() 型態
var height3 = new Map([
    ["yiwei", 165],
    ["william", 180],
]);
console.log(height3);
var str2 = "123";
var myVal = 123;
// 6. enum
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "female";
    Gender["MALE"] = "male";
})(Gender || (Gender = {}));
var gender = Gender.FEMALE;
console.log(Gender);
