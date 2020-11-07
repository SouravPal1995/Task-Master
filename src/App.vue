<template>
<div>
    <task-form @add-task="addTask"></task-form>
    <task 
        v-for="task in tasks" 
        :key="task.id"
        :id="task.id"
        :task-name="task.taskName"
        :description="task.description"
        :duration="task.duration"
        :priority="task.priority"
        @remove-task="removeTask"
        @update-task="updateTask">
    </task>
</div>
</template>

<script>
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
let app = {
    components : {
        'task': Task,
        'task-form':TaskForm
    },
    data : function(){
        return {
            tasks : [
                {
                    id: Math.floor(Math.random() * 100 + 100),
                    taskName: 'House Chores',
                    description:`Clean Room, Wash dishes, fill tanks`,
                    duration: 60,
                    priority: 'High',
                },
                {
                    id: Math.floor(Math.random() * 100 + 100),
                    taskName: 'Home Work',
                    description:`Do Math, Vocabulary, etc`,
                    duration: 120,
                    priority: 'High',
                },
                {
                    id: Math.floor(Math.random() * 100 + 100),
                    taskName: 'Party',
                    description:`Go to Sam's Birthday Party and enjoy. However Donot stay for long`,
                    duration: 60,
                    priority: 'Low',
                },
                {
                    id: Math.floor(Math.random() * 100 + 100),
                    taskName: 'Meditate',
                    description : `Do it for atleast 30 mins. This includes pranayama.`,
                    duration: 30,
                    priority: 'Intermediate',
                }
            ]
        };
    },
    methods : {
        addTask : function(name, description, duration, priority) {
            let newTask = {
                id: Math.floor(Math.random()*100 + 100),
                taskName: name,
                description: description,
                duration: parseInt(duration),
                priority: priority
            };
            this.tasks.push(newTask);
        },
        removeTask : function(id) {
            let newTasks = this.tasks.filter((task) => task.id!==id);
            this.tasks = newTasks;
        },
        updateTask(id, name, desc, dur, pr) {
            console.log(id, name, desc, dur, pr);
            let target = this.tasks.findIndex(task => task.id === id);
            this.tasks[target].taskName=name;
            this.tasks[target].description=desc;
            this.tasks[target].duration=dur;
            this.tasks[target].priority=pr;
        },
    },
};
export default app;
</script>