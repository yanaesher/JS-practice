import { modules, students, mentors, classes } from "./hyf.js";

const possibleMentorsForModule = (moduleName) => { 
const findModule = modules.find(mod => mod.name === moduleName);
return mentors.filter(mentor => mentor.canTeach.includes(findModule.name))
.map(mentor => mentor.name);
};


const findMentorForModule = (moduleName) => {
const mentors = possibleMentorsForModule(moduleName);
return mentors[Math.floor(Math.random() * mentors.length)];
};

console.log(findMentorForModule('react'));