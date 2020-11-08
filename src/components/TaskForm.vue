<template>
  <div>
    <button v-if="!visible" @click="toggleView">
      "++++++++++Add New Task++++++++++"
    </button>
    <div v-if="visible">
      <input type="text" placeholder="Name" v-model="name" />
      <input type="text" placeholder="Description" v-model="description" />
      <input type="text" placeholder="Duration" v-model="duration" />
      <input type="text" placeholder="priority" v-model="priority" />
      <button @click="addTask">Add</button>
      <button @click="toggleView">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["add-task"],
  data: function() {
    return {
      visible: false,
      name: "",
      description: "",
      duration: "",
      priority: "",
    };
  },
  methods: {
    resetData: function() {
      this.visible = false;
      this.name = "";
      this.description = "";
      this.duration = "";
      this.priority = "";
    },
    addTask: function() {
      if (this.name && this.description && this.duration && this.priority) {
        this.$emit(
          "add-task",
          this.name,
          this.description,
          this.duration,
          this.priority
        );
        this.resetData();
      } else {
        alert("One or more fields are Empty");
      }
    },
    toggleView: function() {
      this.visible = !this.visible;
    },
  },
};
</script>
