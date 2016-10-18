var app = angular.module('empApp', []);

app.controller('employeeController', function () {
  var self = this;

  self.totalSalary = 0;
  self.salaries = [];
  self.employees = [];

  self.createEmployee = function () {
    var salary = parseInt(self.person.salary)/12;
    self.employees.push(angular.copy(self.person));
    self.salaries.push(angular.copy(salary));
    self.totalSalary += salary;

    self.person = '';
  };

  self.deleteEmployee = function ($index) {
    self.employees.splice($index, 1);
    var deletedValue = self.salaries.splice($index, 1);
    self.totalSalary -= deletedValue;
  };

});
