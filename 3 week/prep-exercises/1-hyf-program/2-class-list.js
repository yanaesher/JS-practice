import { modules, students, mentors, classes } from "./hyf.js";

const getPeopleOfClass = (className) => {
  const classData = classes.find(classItem => classItem.name === className);
  let users = [...mentors,...students].filter(user => user.class === className || user.nowTeaching === classData.currentModule)
  .map(user => ({
name: user.name,
role: user.canTeach? 'mentor' : 'student'
  }));
return users;
};

 console.log(getPeopleOfClass('class34'));

const getActiveClasses = () => {
let classActiveObj = classes.filter(classItem => classItem.active)
.reduce((obj, item) => {
obj[item.name] = getPeopleOfClass(item.name);
return obj;
},{});
return classActiveObj;
};

 console.log(getActiveClasses());
