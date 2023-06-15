var  user = {
    name: "Tim",
    sayHello(name = this.name, string = 'Добрый день') {
     if ((typeof name != 'string') || (name == '')){ return 'Имя пользователя не указано'}
    this.name = name; 
    return this.name + '' + string;   
  }
}
console.log('1:' + user.sayHello('Добрый', 'день'));
////////////
var  product = {
    name: "iPhone",
    id: 7485,
    price: 1000,
    upPrice(factor) {
      this.price = this.price*(factor/100+1);
      return this.price;
  }
}
console.log('2:' + product.upPrice(10));
////////
function showStudentsFavoriteLessons(...students) {
  let lessons = ['Математика', 'История', 'Спорт', 'Литература', 'Биология', 'География'];
  function checkStudentFavoriteLessons(studentName) {
    let randomNum = Math.floor(Math.random() * (lessons.length + 1)); 
    let favoriteLessons = lessons.slice(-randomNum); 
    if (favoriteLessons.length > 0) {
      console.log(`${studentName}: ${favoriteLessons.join(', ')}`);
    } else {
      console.log(`${studentName}: У этого студента нет любимых предметов`);
    }
  }
 students.forEach(student => checkStudentFavoriteLessons(student));
}
console.log('3:');
showStudentsFavoriteLessons('Артур', 'Женя', 'Костя', 'Миша', 'Денис');