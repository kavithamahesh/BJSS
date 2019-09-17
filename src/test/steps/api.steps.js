import { expect , assert} from 'chai';
const got= require('got');
import { Given, When, Then } from 'cucumber';
import {createRandomString} from '../util/utility'

let employeeId='';
let updateBodyContent='';
let newlyCreateduser =''

const allEmployee = 'http://dummy.restapiexample.com/api/v1/employees';
const createEmployee = 'http://dummy.restapiexample.com/api/v1/create';
const getEmployee = 'http://dummy.restapiexample.com/api/v1/employee/';
const updateEmployee = 'http://dummy.restapiexample.com/api/v1/update/';
const deleteEmployee = 'http://dummy.restapiexample.com/api/v1/delete/';

When(/^user send GET request to employee endpoint$/, async function() {
    let res = await got.get(allEmployee);
    assert.equal(res.statusCode,200);
   
});

When(/^user create new employee with below details$/, async function(dataset){
    let bodyContent = {
        name: dataset.raw()[1][0]==='random' ? 'KavithaTest_' +createRandomString() : dataset.raw()[1][0],
        salary: dataset.raw()[1][1],
        age: dataset.raw()[1][2]
    }
    console.log(bodyContent);
    var options= {
        headers: { 'Content-Type': 'application/json' },
        json: true,
        body: bodyContent
    }
    let res = await got.post(createEmployee ,options);
    assert.equal(res.statusCode,200);
    expect(res.body).to.have.property('id');
    employeeId = res.body.id;
})

When(/^user update employee information with (.*) ,(.*), (.*)$/, async function(name, salary,age){

    console.log(" UPDATING DATA FOR EMPLOYEE     : "+ employeeId);
    console.log("==============================================");
   
         updateBodyContent = {
        name: name==='random' ? 'KavithaTest_' +createRandomString() : newlyCreateduser.employee_name,
        salary: salary=== 'same' ? newlyCreateduser.employee_salary: salary,
        age: age === 'same' ? newlyCreateduser.employee_age : age
    }
    console.log("updateBodyContent          : " + JSON.stringify( updateBodyContent));
    var options= {
        headers: { 'Content-Type': 'application/json' },
        json: true,
        body: updateBodyContent
    }

    console.log(options);

    let updateResponse = await got.put( updateEmployee + employeeId, options);
    assert.equal(updateResponse.statusCode,200);
   })

   When(/^user delete the newly created user$/, async function(){

    let res = await got.delete(deleteEmployee + employeeId);
    assert.equal(res.statusCode,200);
    expect(res.body).contains('success');

   })

Then(/^the user validates the newly created employee does exist in resultset$/, async function(){

    console.log(" GETTING DATA FOR EMPLOYEE     : "+ employeeId);
    console.log("==============================================");
    let res = await got.get(getEmployee + employeeId);
    let jsonResult= JSON.parse(res.body);
    console.log( res.body);
    newlyCreateduser = jsonResult;

    expect(jsonResult).to.have.property('profile_image')
})

Then(/^the user validates the changes to (.*) ,(.*), (.*) updated correctly for the employee$/, async function(employee_name,employee_salary, employee_age){

    console.log(" VALIDATING MODIFIED DATA FOR EMPLOYEE     : "+ employeeId);
    console.log("=========================================================");
    let res = await got.get(getEmployee + employeeId);
    let jsonResult= JSON.parse(res.body);
   
    employee_name !== 'same'? assert.equal(jsonResult.employee_name, updateBodyContent.name ):{}
    employee_salary !== 'same'? assert.equal(jsonResult.employee_salary, updateBodyContent.salary ):{}
    employee_age!== 'same'? assert.equal(jsonResult.employee_age, updateBodyContent.age ):{}
})

Then(/^the user validates the same user does not exist in the resultset$/ , async function(){
    console.log(" GETTING DATA FOR DELETED EMPLOYEE     : "+ employeeId);
    console.log("======================================================");
    let res = await got.get(getEmployee + employeeId);
    expect(res.body).contains(false);
})