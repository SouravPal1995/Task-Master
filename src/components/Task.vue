<template>
  <div>
    <div>
      <h3 v-if="status">
        <strike>
          {{ taskName }}
        </strike>
      </h3>
      <h3 v-else>
        {{ taskName }}
      </h3>
    </div>
    <div v-if="visible">
      <ul>
        <li>Description: {{ description }}</li>
        <li>Duration(in mins.): {{ duration }}</li>
        <li>Priority: {{ priority }}</li>
      </ul>
    </div>
    <button v-on:click="toggleVis">{{ visible ? "Hide" : "Show" }}</button>
    <button v-on:click="removeTask">Delete</button>
    <button v-if="!editVis" @click="toggleEditTask">Edit</button>
    <button @click="toggleStatus">
      {{ status ? "Unmark" : "Mark" }}
    </button>
    <div v-if="editVis">
      <edit-form
        :id="id"
        :name="taskName"
        :description="description"
        :duration="duration"
        :priority="priority"
        @update-vis="updateTask"
        @abort-update="toggleEditTask"
      ></edit-form>
    </div>
  </div>
</template>

<script>
import EditForm from "./EditForm.vue";
export default {
  components: {
    "edit-form": EditForm,
  },
  emits: ["remove-task", "update-task", "toggle-status"],
  props: {
    id: Number,
    taskName: String,
    description: String,
    duration: Number,
    priority: String,
    status: Boolean,
  },
  data: function() {
    return {
      visible: true,
      editVis: false,
    };
  },
  methods: {
    toggleVis: function() {
      this.visible = !this.visible;
    },
    removeTask: function() {
      this.$emit("remove-task", this.id);
    },
    toggleEditTask: function() {
      this.editVis = !this.editVis;
    },
    updateTask: function() {
      this.editVis = !this.editVis;
    },
    toggleStatus: function() {
      this.$emit("toggle-status", this.id);
    },
  },
};
</script>
