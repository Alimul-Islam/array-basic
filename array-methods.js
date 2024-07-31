

//map,foreach,filter, find

const list = [
    { name: 'John', age: 25, height: 5.5, profession: 'executive', salary: 25000 },
    { name: 'mark', age: 27, height: 5.0, profession: 'HR', salary: 28000 },
    { name: 'Miller', age: 32, height: 6.5, profession: 'Developer', salary: 35000 },
    { name: 'David', age: 29, height: 6.0, profession: 'IT Admin', salary: 30000 },
    { name: 'Smith', age: 37, height: 5.5, profession: 'GM', salary: 50000 }
]


const employees = list.map(employee => employee.name)
//console.log(employees)

const Salary = list.map(salary => salary.salary)
//console.log(Salary)

list.forEach(name => console.log(name.height))


const heights = list.filter(h => h.height <= 5.0)
// console.log(heights)

const Name = list.filter(name => name.name.includes("m"));
// console.log(Name)

const Name1 = list.find(name => name.name.includes("S"))
console.log(Name1)

const professions = list.find(prof => prof.profession.includes("IT"))
console.log(professions)