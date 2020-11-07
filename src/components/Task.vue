<template>
    <div>
        <h3 v-if="status">
            <strike> 
                {{ taskName }}
            </strike>
            <span>
                <button @click="toggleStatus">Unmark</button>
            </span> 
        </h3>
        <h3 v-else>
                {{ taskName }}
            <span>
                <button @click="toggleStatus">Mark</button>
            </span>
        </h3>
        <div v-if="visible">
            <ul>
                <li>Description: {{ description }}</li>
                <li>Duration(in mins.): {{ duration }}</li>
                <li>Priority: {{ priority }}</li>
            </ul>
        </div>
        <button v-on:click="toggleVis">{{ visible ? "Hide" : "Show" }}</button>
        <button v-on:click="removeTask">Remove</button>
        <button v-if="!editVis" @click="toggleEditTask">Edit</button><br>
        <div v-if="editVis">
            <edit-form
                :id="id"
                :name="taskName"
                :description="description"
                :duration="duration"
                :priority="priority"
                @update-task="updateTask"
                @abort-update="toggleEditTask"></edit-form>
        </div>
    </div>
</template>

<script>
import EditForm from "./EditForm.vue";
export default {
    components : {
        'edit-form':EditForm,
    },
    emits: [
        'remove-task',
        'update-task'
    ],
    props: {
        id: Number,
        taskName: String,
        description:String,
        duration: Number,
        priority: String,
        status: Boolean
    },
    data : function() {
        return {
            visible : true,
            editVis: false
        };
    },
    methods : {
        toggleVis : function() {
            this.visible = !this.visible;
        },
        removeTask : function() {
            this.$emit("remove-task", this.id);
        },
        toggleEditTask: function() {
            this.editVis = !this.editVis;
        },
        updateTask: function(id, name, desc, dur, pr) {
            this.editVis = !this.editVis;
            this.$emit("update-task", id, name, desc, dur, pr);
        },
        toggleStatus: function() {
            this.$emit("toggle-status", this.id);
            console.log(`${this.taskName} was marked ${this.status}`);
        }, 
    },
    
};
</script>