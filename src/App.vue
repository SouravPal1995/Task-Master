<template>
  <div>
    <h1>Task Master</h1>
    <task
      v-for="task in tasks"
      :key="task.id"
      :id="task.id"
      :task-name="task.taskName"
      :description="task.description"
      :duration="task.duration"
      :priority="task.priority"
      :status="task.status"
      @remove-task="removeTask"
      @update-task="updateTask"
      @toggle-status="toggleStatus">
    </task>
    <task-form @add-task="addTask"></task-form>
  </div>
</template>

<script>
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
let app = {
  components: {
    task: Task,
    "task-form": TaskForm,
  },
  data: function() {
    return {
      tasks: [
        {
          id: Math.floor(Math.random() * 100 + 100),
          taskName: "House Chores",
          description: `Clean Room, Wash dishes, fill tanks`,
          duration: 60,
          priority: "High",
          status: false,
        },
        {
          id: Math.floor(Math.random() * 100 + 100),
          taskName: "Home Work",
          description: `Do Math, Vocabulary, etc`,
          duration: 120,
          priority: "High",
          status: false,
        },
        {
          id: Math.floor(Math.random() * 100 + 100),
          taskName: "Meditate",
          description: `Do it for atleast 30 mins.\nThis includes pranayama.`,
          duration: 30,
          priority: "Intermediate",
          status: false,
        },
      ],
    };
  },
  provide: function() {
    return {
      updateTask: this.updateTask,
    };
  },
  methods: {
    addTask: function(name, description, duration, priority) {
      let newTask = {
        id: Math.floor(Math.random() * 100 + 100),
        taskName: name,
        description: description,
        duration: parseInt(duration),
        priority: priority,
      };
      this.tasks.push(newTask);
    },
    removeTask: function(id) {
      let newTasks = this.tasks.filter(task => task.id !== id);
      this.tasks = newTasks;
    },
    updateTask(id, name, description, duration, priority) {
      let target = this.tasks.findIndex(task => task.id === id);
      this.tasks[target].taskName = name;
      this.tasks[target].description = description;
      this.tasks[target].duration = duration;
      this.tasks[target].priority = priority;
    },
    toggleStatus: function(id) {
      let target = this.tasks.findIndex(task => task.id === id);
      this.tasks[target].status = !this.tasks[target].status;
    },
  },
};
export default app;
</script>
