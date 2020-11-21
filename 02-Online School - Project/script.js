class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name (){
    return this._name
  }
  get level (){
    return this._level
  }
  get numberOfStudents(){
    return this._numberOfStudents
  }
  set numberOfStudents(value){
    this._numberOfStudents = value
  }
  quickFacts(){
    console.log(`${this._name}  educates ${this._numberOfStudents} students at the ${this._level} school level`)
  }
  static pickSubstituteTeacher(substituteTeacher){
 let random = Math.floor(Math.random() * substituteTeacher.length)
 return substituteTeacher[random]
  }
}


class Primary extends School {
  constructor(name, level, numberOfStudents, pickupPolicy){
    super(name, level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy
  }
}

class MiddleSchool extends School {
  constructor(name, level, numberOfStudents){
    super(name, level, numberOfStudents)
  }
}

class High extends School {
  constructor(name, level, numberOfStudents, sportsTeams){
    super(name, level, numberOfStudents);
    this._sportsTeams = sportsTeams
  }
  get sportsTeams(){
    return this._sportsTeams
  }
}

const sierraNeveda = new Primary('Sierre Neveda', 'Primary', 442, 'Must be picked up by parent' )
sierraNeveda.quickFacts();

console.log(School.pickSubstituteTeacher(['Marisol Chandler', 'Morin Marcia Walsh', 'Walton Pratt Wiley', 'Lou Williams', 'J. R. Burton', 'Allen Downs', 'Salinas Mcclain', 'Nancy Miles']));

const middle = new MiddleSchool ('Middle', 'Middle School', '400')

const elkhart = new High('Elkhart', 'High School', 515, ['Baseball', 'Basketball', 'Voleyball', 'Ice Hokey'] )

console.log(elkhart.sportsTeams)

class SchoolCatalog {
  constructor(){
    this.array = [];
  }
  addSchool(school){
   return this.array.push(school)
  }
}

const catalog = new SchoolCatalog ()
catalog.addSchool(sierraNeveda)
catalog.addSchool(elkhart)
catalog.addSchool(middle)


console.log(catalog)

let schoolSelect = document.getElementById('schoolTypeSelect')
let titleSchool = document.getElementById('titleOfSchool')
let numberOfStudent = document.getElementById('studentsNumber')
let pickupPolicy = document.getElementById('pickupPolicy')
let sports = document.getElementById('sportsTeams')
let overview = document.getElementById('schoolOverview')
let button = document.getElementById('submit_btn')
let paragraph = document.getElementById('catalogSchool')
button.addEventListener('click', function(){
  let constructor = schoolSelect.value === "High" ? HighSchool : schoolSelect.value === "Middle" ? MiddleSchool :schoolSelect.value === "Primary" ? PrimarySchool :"";
  let newSchool = new constructor(titleSchool.value, numberOfStudent.value, constructor===High? sports.value: constructor===MiddleSchool? overview.value: constructor===PrimarySchool? pickupPolicy.value: "")
  catalog.addSchool(newSchool);
  let result=[];
  console.log(catalog.array)
  catalog.array.forEach(elem => result.push(elem.name));
  return paragraph.innerHTML = result.join(" <br> ");
})

