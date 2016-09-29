$(document).ready(function() {
  var totalSalary = 0;
  var salaries = [];

// removes Employee entry
  $('#remove').on('click', '.delete', function(event){
    var x = ($(event.target).index()) - 1;
    $(this).closest('button').remove();
    console.log(x);

    // updates monthly salary expenditure by deleting salary of removed employee
    var deletedSalary = parseFloat((salaries[x]));
    console.log(deletedSalary);
    totalSalary = totalSalary - deletedSalary;
    $('#expenditure').find('p').text(totalSalary);

    //removes employee information
    for(var i=0; i<5; i++){
      $('#empList li').eq(i).find('.person').eq(x).remove();
    };
  });

//submit employee information on submit
  $('#empInfo').on('submit', function(event){
    event.preventDefault();
    var employee = {};
    var entry = $('#empInfo').serializeArray();

    entry.forEach(function(element, index) {
      employee[element.name] = element.value;
    //clearing the input form on submit
      $('#empInfo').find('input[type=text]').val('');
      $('#empInfo').find('input[type=number]').val('');
    });
    var emp = [employee['firstName'], employee['lastName'], employee['idNumber'], employee['jobTitle'], employee['salary']];

    addEmployee(emp);
    addSalary(emp);
    addDelete();
  });

function addEmployee(person) {
  for(var i=0; i<5; i++){
    $('#empList li').eq(i).append('<br><p class="person">' + person[i] + '<p>');
  };
}

function addSalary(person) {
  var salary = parseFloat(person[4]/12);
  salaries.push(salary);
  totalSalary = parseFloat(salary + totalSalary);
  $('#expenditure').find('p').text(totalSalary.toFixed(2));
}

function addDelete() {
  $('#remove').append('<button class="delete">X</button>');
  }
});
