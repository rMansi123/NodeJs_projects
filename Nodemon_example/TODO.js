const fs = require('fs');
const yargs = require('yargs');

const todoFile = 'todo-list.txt';

// Command to add a new task
yargs.command({
  command: 'add',
  describe: 'Add a new task to the TODO list',
  builder: {
    task: {
      describe: 'Task description',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    const task = argv.task;
    addTask(task);
    console.log('Task added to the TODO list.');
  },
});

// Command to list all tasks
yargs.command({
  command: 'list',
  describe: 'List all tasks in the TODO list',
  handler: () => {
    listTasks();
  },
});

// Command to remove a task
yargs.command({
  command: 'remove',
  describe: 'Remove a task from the TODO list',
  builder: {
    task: {
      describe: 'Task description to remove',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    const task = argv.task;
    removeTask(task);
    console.log('Task removed from the TODO list.');
  },
});

// Function to add a new task
const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ task, completed: false });
  saveTasks(tasks);
};

// Function to list all tasks
const listTasks = () => {
  const tasks = loadTasks();
  console.log('TODO List:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.task}`);
  });
};

// Function to remove a task
const removeTask = (taskToRemove) => {
  const tasks = loadTasks();
  const updatedTasks = tasks.filter((task) => task.task !== taskToRemove);
  saveTasks(updatedTasks);
};

// Function to load tasks from file
const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(todoFile);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

// Function to save tasks to file
const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(todoFile, dataJSON);
};

// Parse command line arguments
yargs.parse();


//Run the app 
// node todo.js add --task "Complete Node.js tutorial"
// node todo.js list
// node todo.js remove --task "Complete Node.js tutorial"
// node todo.js list
