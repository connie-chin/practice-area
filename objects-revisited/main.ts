interface Business {
  opens: string;
  closes: string;
  totalEmployees: number;
  daysOpen: string[];
  employees: Record<string, Employee>;
}
interface Employee {
  // name: string;
  fullTime?: boolean;
  position: string;
  daysOfWeekWorking: string[];
}
const business: Business = {
  opens: '9am',
  closes: '10pm',
  totalEmployees: 5,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    stacy: {
      // name: 'Stacy Q',
      position: 'cleaner',
      daysOfWeekWorking: ['M', 'Th', 'F'],
    },
    kimmy: {
      // name: 'Kimmy Loop',
      position: 'folder',
      daysOfWeekWorking: ['T', 'W', 'F'],
    },
    frankie: {
      // name: 'Frankie Munez',
      position: 'delivery',
      daysOfWeekWorking: ['W', 'Th', 'F'],
    },
    sunny: {
      // name: 'Sunny Dee',
      position: 'counter',
      daysOfWeekWorking: ['M', 'T', 'W', 'Th'],
    },
    jessa: {
      // name: 'Jessa Hannah',
      position: 'waterer',
      daysOfWeekWorking: ['T', 'F'],
    },
  }
}
// function addWeekends () {
//   business.daysOpen.push('Sa', 'Sun');
//   for (const employee in business.employees) {
//     const currentEmployee = business.employees[employee];
//     currentEmployee.daysOfWeekWorking.push('Sa', 'Sun');
//     // console.log('businessemployee:',business.employees);
//     // console.log('currentemployee',currentEmployee);
//   }
// }
// addWeekends();
function addWeekends(): void {
  business.daysOpen.push('Sa', 'Sun');
  for (const employee in business.employees) {
    const currentEmployee = business.employees[employee];
    currentEmployee.daysOfWeekWorking.push('Sa', 'Sun');
  }
}
addWeekends();
// const jobsForNewEmployees = ['singer', 'blogger', 'plucker', 'scrubber'];
// async function addEmployees () {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     if (!response.ok) throw new Error(`fetch Error ${response.status}`);
//     const userObject = await response.json();
//     console.log('userObject:', userObject);
//     let i = 0;
//     userObject.forEach((user) => {
//       if (i >= 4) return;
//       business.employees[user.username] = {
//       position: '',
//       daysOfWeekWorking: [],
//       fullTime: false,
//       }
//     i++;})
//     business.employees['Antonette'].position = jobsForNewEmployees[0];
//     business.employees['Bret'].position = jobsForNewEmployees[1];
//     business.employees['Karianne'].position = jobsForNewEmployees[2];
//     business.employees['Samantha'].position = jobsForNewEmployees[3];
//   }
//      catch (error) {
//     console.log('fetch failed', error);
//   }
// }
// function numWorkDays(max: number): number  {
//   return Math.floor(Math.random() * max)
// }
// let daysOpen = business.daysOpen.length;
// let workDays = numWorkDays(daysOpen);
// addEmployees();

async function addEmployees() : Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error (`fetch Error ${response.status}`);
    const userFromApi = await response.json();
    console.log('users:', userFromApi);//array of objects. need the first 4.
    console.log('business employees:', business.employees);
    userFromApi.forEach((user, index) => {
      if (index>=4) return;
      business.employees[user.username] = {
        position: '',
        daysOfWeekWorking: []
      }
    });
    business.employees.Bret.position = 'cashier';
    business.employees.Antonette.position = 'intake';
    business.employees.Karianne.position = 'walker';
    business.employees.Samantha.position = 'runner';
    console.log('employees updated:', business.employees);
    //now assign them random days to work with math.random



  }
  catch (error) {
    console.log('fetch failed', error);
  }
}

addEmployees();

function numWorkDays(max: number): number  {
  return Math.floor(Math.random() * max)
}
