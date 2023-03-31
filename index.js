/* Your Code Here */

const createEmployeeRecord = arr => {
    let obj = {};
    return (obj = {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    });
  };
  
  const createEmployeeRecords = arr => {
    let result = [];
    for (const element of arr) {
      result.push(createEmployeeRecord(element));
    }
    return result;
  };
  
  function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ");
  
    this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date
    });
  
    return this;
  }
  
  function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ");
  
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date
    });
  
    return this;
  }
  
  function hoursWorkedOnDate(date) {
    let dateTimeIn = this.timeInEvents.find(d => d.date == date);
    let dateTimeOut = this.timeOutEvents.find(d => d.date == date);
  
    let timeIn = dateTimeIn.hour;
    let timeOut = dateTimeOut.hour;
    let hoursWorked = (timeOut - timeIn) / 100;
    return hoursWorked;
  }


// let hoursWorkedOnDate = function(soughtDate) {
//   let inEvent = this.timeInEvents.find(function(e) {
//     return e.date === soughtDate;
//   });

//   let outEvent = this.timeOutEvents.find(function(e) {
//     return e.date === soughtDate;
//   });

//   return (outEvent.hour - inEvent.hour) / 100;
// };

function wagesEarnedOnDate(date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date);
  
    let payOwed = hoursWorked * this.payPerHour;
    return payOwed;
  }

//   const allWagesFor = record => {
//     let totalOwed = 0;
//     let dates = record.timeInEvents.map(d => d.date);

//     for (const date of dates) {
//       totalOwed += wagesEarnedOnDate(record, date);
//     }
//     return totalOwed;
//   };

const findEmployeeByFirstName = (srcArray, firstName) => {
    let employee = srcArray.find(e => (e.firstName = firstName));
    return employee;
  };
  
  function calculatePayroll(array) {
    let grandTotal = 0;
    for (const employee of array) {
      grandTotal += allWagesFor.call(employee);
    }
    return grandTotal;
  }
  
  // let calculatePayroll = function(arrayOfEmployeeRecords){
  //     return arrayOfEmployeeRecords.reduce(function(memo, rec){
  //         return memo + allWagesFor.call(rec)
  //     }, 0)
  // }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

