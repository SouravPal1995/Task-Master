<template>
    <div>
        <h3>Add Task <span><button @click="toggleView">{{ visible ? "Hide" : "Show" }}</button></span> </h3>
        <div v-if="visible">
            <input type="text" placeholder="Name" v-model="name">
            <input type="text" placeholder="Description" v-model="description">
            <input type="text" placeholder="Duration" v-model="duration">
            <input type="text" placeholder="priority" v-model="priority">
            <button @click="addTask">Add</button>
        </div>   
    </div>
</template>

<script>
export default {
    props : [
        "taskName",
        "taskDescription",
        "taskDuration",
        "taskPriority"
    ],
    emits:['add-task'],
    data: function() {
        return {
            visible: true, 
            name: '',
            description: '',
            duration: '',
            priority: ''
        };
        
    }, 
    methods : {
        resetData: function() {
            this.name = "",
            this.description = "",
            this.duration = "",
            this.priority = ""
        },
        addTask : function() {
            if (this.name && this.description && this.duration && this.priority) {
                this.$emit("add-task", this.name, this.description, this.duration, this.priority);
                this.resetData();
            } else {
                alert("One or more fields are Empty");
            }
        },
        toggleView : function() {
            this.visible = !this.visible
        }
    }
}
</script>