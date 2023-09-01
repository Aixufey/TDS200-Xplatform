// Object of type Student
var newStudent = {
    name: 'John',
    age: 38
};
// Enums
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
var yyy = Colors.Red;
// Tuples
var tup = ['John', 38];
tup = ['Wick', 40];
// tup[0] -> Wick
// tup[1] -> 40
console.log(tup);
var addAddressToComp;
