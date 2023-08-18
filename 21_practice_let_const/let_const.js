
let teachers = [
	{
		name: 'Ashley',
		topicArea: 'Javascript'
	}
];

const newTeachers = [
	{
		name: 'James',
		topicArea: 'Javascript'
	},
	{
		name: 'Treasure',
		topicArea: 'Javascript'
	}
];

const courses = ['Introducing JavaScript',
				'JavaScript Basics',
				'JavaScript Loops, Arrays and Objects',
				'Getting Started with ES2015',
				'JavaScript and the DOM',
				'DOM Scripting By Example'];
			

const nb_courses = courses.length;



function addNewTeachers(newTeachers) {
	return [...teachers, ...newTeachers]
}
teachers = addNewTeachers(newTeachers);


function printTreehouseSummary() {
	// TODO: fix this function so that it prints the correct number of courses and   teachers 
	
  for (let i = 0; i < teachers.length; i++) {
	 console.log(`${teachers[i].name} teaches ${teachers[i].topicArea}`);
	}
	
  console.log(`Treehouse has ${nb_courses} JavaScript courses, and ${teachers.length} Javascript teachers`);
}


addNewTeachers(newTeachers);
printTreehouseSummary();












