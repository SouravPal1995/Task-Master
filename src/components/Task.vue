<template>
    <div>
        <h3>{{ taskName }}</h3>
        <div v-if="visible">
            <ul>
                <li>Description: {{ description }}</li>
                <li>Duration(in mins.): {{ duration }}</li>
                <li>Priority: {{ priority }}</li>
            </ul>
        </div>
        <button v-on:click="toggleVis">{{ visible ? "Hide" : "Show" }}</button>
        <button v-on:click="removeTask">Remove</button>
        <button @click="editTask">Edit</button>
        <div v-if="enableEdit">
            <edit-form
                :id="id"
                :name="taskName"
                :description="description"
                :duration="duration"
                :priority="priority"
                @update-task="updateTask"></edit-form>
        </div>
    </div>
</template>

<script>
import EditForm from "./EditForm.vue";
export default {
    components : {
        'edit-form':EditForm,
    },
    props: {
        id: Number,
        taskName: String,
        description:String,
        duration: Number,
        priority: String,
    },
    data : function() {
        return {
            visible : true,
            enableEdit: false
        };
    },
    methods : {
        toggleVis : function() {
            this.visible = !this.visible;
        },
        removeTask : function() {
            this.$emit("remove-task", this.id);
        },
        editTask: function() {
            this.enableEdit = !this.enableEdit;
        },
        updateTask: function(id, name, desc, dur, pr, vis) {
            this.enableEdit = vis;
            this.$emit("update-task", id, name, desc, dur, pr);
        }, 
    },
    
};
</script>