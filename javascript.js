//declear variable
const a = 5;
const b = 5;
const sum = a + b;
console.log(sum);
//fuction
function sum( x, y){
    return x+y;
}
const getresult =sum(5,4);
console.log(getresult);
//array
const array =[2,3,4,5,6];
console.log(array);
console.log(array.length);
//object
const student=[
    {name:'kaniz',roll:'175'},
    {name:'saima',roll:'173'},
    {name:'mim',roll:'187'},
    {name:'tumpa',roll:'175'},
    {name:'mrittika',roll:'168'},
];
const mapStudent = student.map(st=>st.name);
console.log(mapStudent);
const fliterstudent = student.filter(st=>st.roll==='173');
console.log(fliterstudent);
student.forEach(st=>console.log(st.name));
const findStudent = student.find(st=>st.roll="175");
console.log(findStudent);

