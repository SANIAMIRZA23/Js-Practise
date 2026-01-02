//Is file mai jo bhi codding krni hai vo export krenge or jo file index.html ke sath link hui vi hai us file mai import krenge...
//Modules: //1- default modules:

let mod = ["a", "b", "c", "d"];
let eg = [1, 2, 3, 4, 5]
export default { mod, eg }

//Modules: //2- Main modules:
function func(a, b) {
    console.log(a + b);
}
function sub(c,d){
    console.log(c-d);
}
export {func,sub};
export let obje = {
    myName : "sania",
    fName : "Mirza"
}