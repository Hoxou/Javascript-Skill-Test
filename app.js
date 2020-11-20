//Factories
const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
];


//1.
//console.log(countNbEmployeeByFactory());
function countNbEmployeeByFactory() {
    const employeeCount = []

    factories.map(function (factory) {
        employeeCount.push({ name: factory.name, count: factory.employees.length });
    });
    return employeeCount
}


//2.
//console.log(countFactoriesByEmployee());
function countFactoriesByEmployee() {
    const data = []
    const finaldata = []
    const waitingarray = []
    var cnt = 1;
    factories.map((factory) => {
        const name = factory.employees;
        data.push(name);
    })


    const strnames = data.join()
    const names = strnames.split(',');


    for (var i = 0; i < names.length; i++) {
        waitingarray.push(names[i]);
        if (waitingarray[i] != names[i]) {
            finaldata.push({ employee: names[i], counter: cnt })
        }
        else {
        }
    }


    return finaldata
}










//3.
//console.log(orderEmployeeList());
function orderEmployeeList() {
    const alphOrder = []
    factories.map(function (factory) {
        const alph = factory.employees.sort();
        alphOrder.push({ name: factory.name, employees: alph });
    });
    return alphOrder;
}













const employeeType = [
    { id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00" },
    { id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00" },
    { id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00" },
];

const employees = [
    { id: 1, name: "Alice", type: 2 },
    { id: 2, name: "Bob", type: 3 },
    { id: 3, name: "John", type: 2 },
    { id: 4, name: "Karen", type: 1 },
    { id: 5, name: "Miles", type: 3 },
    { id: 6, name: "Henry", type: 1 }
];

const tasks = [
    { id: 1, title: "task01", duration: 60 },
    { id: 2, title: "task02", duration: 120 },
    { id: 3, title: "task03", duration: 180 },
    { id: 4, title: "task04", duration: 360 },
    { id: 5, title: "task05", duration: 30 },
    { id: 6, title: "task06", duration: 220 },
    { id: 7, title: "task07", duration: 640 },
    { id: 8, title: "task08", duration: 250 },
    { id: 9, title: "task09", duration: 119 },
    { id: 10, title: "task10", duration: 560 },
    { id: 11, title: "task11", duration: 340 },
    { id: 12, title: "task12", duration: 45 },
    { id: 13, title: "task13", duration: 86 },
    { id: 14, title: "task14", duration: 480 },
    { id: 15, title: "task15", duration: 900 }
];




//4
//console.log(howManyWorkHoursInOneDay());

function howManyWorkHoursInOneDay() {
    const data = []
    //go through employeeType array
    employeeType.map(function (employeeWork) {
        //parse work_begin to int
        const workStart = employeeWork.work_begin;
        var parsedWorkStart = parseInt(workStart);
        //parse work_end to int
        const workEnd = employeeWork.work_end;
        var parsedWorkEnd = parseInt(workEnd);
        //if you finish work at midnight then its equal to 24;
        if (parsedWorkEnd === 0) {
            parsedWorkEnd = 24;
        }
        //push the number of working hours in the data array
        var workTimeType = parsedWorkEnd - parsedWorkStart;
        data.push(workTimeType);
    })

    const fullTime = data[0];
    const midTime = data[1];
    const halfTime = data[2];

    //number of employees WHERE employee type is equal to 1
    const type1 = employees.filter((type) => {
        return type.type === 1;
    })
    //number of employees WHERE employee type is equal to 2
    const type2 = employees.filter((type) => {
        return type.type === 2;
    })
    //number of employees WHERE employee type is equal to 3
    const type3 = employees.filter((type) => {
        return type.type === 3;
    })
    //multiply the fullTime nb of hours by the nb of fullTime employees
    //+ multiply the midTime nb of hours by the nb of midTime employees
    //+ multiply the halfTime nb of hours by the nb of halfTime employees
    return totalDailyWork = (fullTime * type1.length) + (midTime * type2.length) + (halfTime * type3.length);
}









//5.
//console.log(howManyEmployeeByTime(17));

function howManyEmployeeByTime(time) {
    var nbEmployee = 0;
    //if the input time is between 0 and 9 then the number of employees is equal to 0
    if (time > 0 && time < 9) {
        nbEmployee = 0;
    }
    else {
        //go through each employee
        employees.map(function (employee) {
            //take it's type
            const type = employee.type;
            //return an array of all objects WHERE employee.type is equal to employeeType.id
            const check = employeeType.filter(id => id.id === type);

            //check each employee work schedule
            check.forEach(data => {
                //parse the work_begin value into integer
                const workStart = data.work_begin;
                var parsedWorkStart = parseInt(workStart);
                //parse the work_end value into integer
                const workEnd = data.work_end;
                var parsedWorkEnd = parseInt(workEnd);
                //make sure that if you finish at midnight its 24, and not 0;
                if (parsedWorkEnd === 0) {
                    parsedWorkEnd = 24;
                }
                //console.log('start : ', parsedWorkStart, ' End : ', parsedWorkEnd);

                //if the time inputed is part of the employee working schedule
                if (time >= parsedWorkStart && time <= parsedWorkEnd) {
                    //then add this employee to the counter
                    nbEmployee++;
                }
            })

        })
        nbEmployee;
    }
    return nbEmployee
}






//6.
//console.log(howManyDays());

function howManyDays() {

    const durationArray = []
    const workingDay = 24 - 9;
    const nbEmployee = employees.length;

    //go through the object array, take every duration value and put it in a normal array to be able to use the .reduce() later on
    tasks.map(function (task) {
        durationArray.push(task.duration);
    })

    //Sum of all tasks duration
    var sum = durationArray.reduce((acc, val) => {
        return acc + val
    }, 0);

    //SUM of all tasks duration / 15hours of work per day / number of employees
    var nbDays = (sum / workingDay) / nbEmployee;

    //RoundUp to next int
    return Math.ceil(nbDays);
}