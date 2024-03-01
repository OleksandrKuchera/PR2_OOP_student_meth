class Student {
    constructor(idStudent, name, dataRegistration) {
      this.idStudent = idStudent;
      this.name = name;
      this.dataRegistration = dataRegistration;
      this.languages = []
      this.phone =[]
      this.bilings = []
      this.delights = []
      this.email = []
    }

getLanguage(language) {
  this.languages.push(language);
}

removeLanguage(languageName) {
    const index = this.languages.findIndex(language => language.selectedLanguage === languageName);
    if (index !== -1) {
        this.languages.splice(index, 1);
    }
}

getDelight(delight) { 
  this.delights.push(delight);
}

removeDelight(nameDelight) {
  const index = this.delights.findIndex(delight => delight.nameDelight === nameDelight);
    if (index !== -1) {
      this.delights.splice(index, 1);
    }
}

getBiling(biling){
  this.bilings.push(biling)
}

removeBiling(dataBilingDataSpending) {
    const index = this.bilings.findIndex(biling => biling.bilingDataSpending.dataBilingDataSpending === dataBilingDataSpending);
    if (index !== -1) {
      this.bilings.splice(index, 1);
    }
}
  
addPhone(phone) {
  this.phone.push(phone); 
}

removePhone(phoneNumber) {
    const index = this.phone.findIndex(phone => phone.numberPhone === phoneNumber);
    if (index !== -1) {
        this.phone.splice(index, 1);
    }
}

addEmail(email) {
  this.email.push(email);
}

removeEmail(emailName) {
    const index = this.email.findIndex(email => email.emailName === emailName);
    if (index !== -1) {
        this.email.splice(index, 1);
    }
}
}


class DBForm {
    constructor() {
      this.currentId = 1;
      this.students = []; 
}

createStudent(name, dataRegistration,languageNameCount) {
    const idStudent = this.currentId++
    this.languageNameCount = languageNameCount
    const student = new Student(idStudent, name, dataRegistration);
    this.students.push(student);
    return student;
}

getUniqueLanguages() {
    const allLanguages = [];
    this.students.forEach(student => {
        student.languages.forEach(language => {
            if (!allLanguages.includes(language.selectedLanguage)) {
                allLanguages.push(language.selectedLanguage);
            }
        });
    });
    return allLanguages;
}

countStudentsByLanguage(languageName) {
    let count = 0;
    this.students.forEach(student => {
        student.languages.forEach(language => {
            if (language.selectedLanguage === languageName) {
                count++;
            }
        });
    });
    return count;
}

countStudentsByLanguageAndLevel(languageName, level) {
    let count = 0;
    this.students.forEach(student => {
        student.languages.forEach(language => {
            if (language.selectedLanguage === languageName && language.selectedLevelLearning === level) {
                count++;
            }
        });
    });
    return count;
}

getAllOperatorFee(order, count) {
    const allPhoneFee = [];
    this.students.forEach(student => {
        student.phone.forEach(phone => {
            allPhoneFee.push(phone.operatorFee);
        });
    });

    if (order === 'down') {
        allPhoneFee.sort((a, b) => b - a);
    } else if (order === 'top') {
        allPhoneFee.sort((a, b) => a - b);
    }

    return allPhoneFeeslice(0, count);
}

getTotalPhoneFeeByStudentId(studentId) {
    const student = this.students.find(student => student.idStudent === studentId);
    if (!student) {
        console.log("Нема студента");
        return 0;
    }

    let totalFee = 0;
    student.phone.forEach(phone => {
        totalFee += phone.operatorFee;
    });

    return totalFee;
}

}

class Language {
    constructor(selectedLanguage,selectedStudyLanguage,selectedLevelLearning ){
      this.selectedLanguage = selectedLanguage;
      this.selectedStudyLanguage = selectedStudyLanguage;
      this.selectedLevelLearning = selectedLevelLearning;
    }
}

class LevelLearning{
    constructor(){
        this.levelA1 = 'A1';
        this.levelA2 = 'A2';
        this.levelB1 = 'B1';
        this.levelB2 = 'B2';
        this.levelC1 = 'C1';
        this.levelC2 = 'C2';
    }
}

class LanguageList{
    constructor(){
      this.languageListEnglish = 'English'
      this.languageListUkraine = 'Ukraine'
      this.languageListPolish = 'Polish'
      this.languageListSpanish = 'Spanish'
      this.languageListPortuguese = 'Portuguese'
    }
}

class StudyLanguage{
    constructor(){
      this.studyLanguageInProcces = 'In procces'
      this.studyLanguageSuspended = 'Suspended'
      this.studyLanguageCompleted = 'Completed'
    }
}

class Delight {
    constructor(nameDelight, duration, selectLevelListDelight){
      this.nameDelight = nameDelight
      this.duration = duration
      this.selectLevelListDelight = selectLevelListDelight
    }
}

class LevelListDelight {
    constructor() {
        this.levelLow = 'Low benefit'
        this.levelAverage = 'Average benefit'
        this.levelHigh  = 'High benefit'
    }
}

class Billing{
    constructor(earning, costs, bilingDataSpending, currency){
      this.earning = earning
      this.costs = costs
      this.bilingDataSpending = bilingDataSpending
      this.currency = currency
    }
}

class BilingDataSpending{
    constructor(dataBilingDataSpending, timeBilingDataSpending,){
      this.dataBilingDataSpending = dataBilingDataSpending
      this.timeBilingDataSpending = timeBilingDataSpending
    }
}

class Currency{
    constructor(nameCurrency, course){
      this.nameCurrency =nameCurrency
      this.course = course
    }
}

class Phone{
  constructor(numberPhone,nameOperator,operatorFee){
      this.numberPhone =numberPhone
      this.nameOperator= nameOperator
      this.operatorFee = operatorFee
  }
}

class Emails{
  constructor(emailName){
    this.emailName = emailName
  }
}

//форма
const dbForm = new DBForm();
const newStudent = dbForm.createStudent('Frank Wentigo', '1922-05-05');
//мова1
const languageList = new LanguageList();
const selectedLanguage = languageList.languageListPolish;

const studyLanguage = new StudyLanguage();
const selectedStudyLanguage = studyLanguage.studyLanguageCompleted;

const levelLearning = new LevelLearning();
const selectedLevelLearning = levelLearning.levelC2;

const languagee = new Language(selectedLanguage, selectedStudyLanguage, selectedLevelLearning);
newStudent.getLanguage(languagee)
//мова2
const languageList1 = new LanguageList();
const selectedLanguage1 = languageList.languageListEnglish;

const studyLanguage1 = new StudyLanguage();
const selectedStudyLanguage1 = studyLanguage.studyLanguageInProcces;

const levelLearning1 = new LevelLearning();
const selectedLevelLearning1 = levelLearning.levelB1;

const languagee1 = new Language(selectedLanguage1, selectedStudyLanguage1, selectedLevelLearning1);
newStudent.getLanguage(languagee1)
//мова3
const languageList2 = new LanguageList();
const selectedLanguage2 = languageList.languageListPolish;

const studyLanguage2 = new StudyLanguage();
const selectedStudyLanguage2 = studyLanguage.studyLanguageCompleted;

const levelLearning2 = new LevelLearning();
const selectedLevelLearning2 = levelLearning.levelC2;

const languagee2 = new Language(selectedLanguage2, selectedStudyLanguage2, selectedLevelLearning2);
newStudent.getLanguage(languagee2)
//хобі
const levelListDelight = new LevelListDelight()

const selectLevelListDelight = levelListDelight.levelHigh
const delight = new Delight('swiming', '5years', selectLevelListDelight);
newStudent.getDelight(delight);

const selectLevelListDelight1 = levelListDelight.levelLow
const delight1 = new Delight('Reading', '2days', selectLevelListDelight1);
newStudent.getDelight(delight1);
//Витрати
const bilingDataSpending = new BilingDataSpending('2023-04-29','18:36')
const currency = new Currency('UAH', 38.5)
const billing = new Billing(1000, 238, bilingDataSpending, currency)
newStudent.getBiling(billing)

const bilingDataSpending1 = new BilingDataSpending('2024-02-18','21:10')
const currency1 = new Currency('USD', 1)
const billing1 = new Billing(112, 36, bilingDataSpending1, currency1)
newStudent.getBiling(billing1)

//телефон
const phone = new Phone('0974021456', 'TestNameOperator221', 500);
newStudent.addPhone(phone)

const phone1 = new Phone('21412412', 'fffff', 150);
newStudent.addPhone(phone1)

const phone2 = new Phone('125634412', 'lololo', 182);
newStudent.addPhone(phone2)
//емайл
const email = new Emails('MegaNagibator21@gmail.com');
newStudent.addEmail(email);

const email1 = new Emails('testataw21@gmail.com')
newStudent.addEmail(email1);

console.log('-==============================================-')
console.log("Айді студента:", newStudent.idStudent);
console.log("Ім'я:", newStudent.name);
console.log("Дата створення профілю:", newStudent.dataRegistration);
console.log("Мови:", newStudent.languages);
console.log("Телефонна інформація:", newStudent.phone);
console.log("Пошти:", newStudent.email);
console.log("Рахунки:", newStudent.bilings);
console.log("Хобі:", newStudent.delights);
console.log('-==============================================-')

newStudent.removeLanguage('English')
newStudent.removePhone('21412412')
newStudent.removeEmail('testataw21@gmail.com')
newStudent.removeBiling('2024-02-18','21:10')
newStudent.removeDelight('Reading')

console.log('-==============================================-')
console.log("Айді студента:", newStudent.idStudent);
console.log("Ім'я:", newStudent.name);
console.log("Дата створення профілю:", newStudent.dataRegistration);
console.log("Мови:", newStudent.languages);
console.log("Телефонна інформація:", newStudent.phone);
console.log("Пошти:", newStudent.email);
console.log("Рахунки:", newStudent.bilings);
console.log("Хобі:", newStudent.delights);
console.log('-==============================================-')

//Перелік мов якими володіють студенти (без повторень):
console.log(`Перелік мов якими володіють студенти (без повторень): ${dbForm.getUniqueLanguages()}`)

//Кількість студентів які знають певну мову:
console.log(`Кількість студентів які знають певну мову: ${dbForm.countStudentsByLanguage('English')}`)
console.log(`Кількість студентів які знають певну мову: ${dbForm.countStudentsByLanguage('Polish')}`)

//Кількість студентів які знають певну мову на певному рівні:
console.log(`Кількість студентів які знають певну мову на певному рівні: ${dbForm.countStudentsByLanguageAndLevel('English', 'B1')}`)
console.log(`Кількість студентів які знають певну мову на певному рівні: ${dbForm.countStudentsByLanguageAndLevel('Polish', 'C2')}`)

//Отримати суму абонентської плати за мобільний зв'язок по конкретній особі:
console.log(`Отримати суму абонентської плати за мобільний зв'язок по конкретній особі: ${dbForm.getTotalPhoneFeeByStudentId(1)}`)

//Отримати N абонентів які витрачають на мобільний зв’язок найбільше та найменше.
console.log(`Отримати N абонентів які витрачають на мобільний зв’язок найбільше та найменше: ${dbForm.getAllOperatorFee('top', 1)}`)

