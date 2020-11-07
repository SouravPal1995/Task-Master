<template>
  <div>
    <input type="text" placeholder="Name" v-model="eName" />
    <input type="text" placeholder="Description" v-model="eDesc" />
    <input type="text" placeholder="Duration" v-model="eDuration" />
    <input type="text" placeholder="priority" v-model="ePriority" />
    <button @click="updateTask">Update</button>
    <button @click="abortUpdate">Cancel</button>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    description: String,
    duration: String,
    priority: String,
  },
  emits: ["update-task"],
  data: function() {
    return {
      eId: this.id,
      eName: this.name,
      eDesc: this.description,
      eDuration: this.duration,
      ePriority: this.priority,
    };
  },
  methods: {
    updateTask: function() {
      this.$emit(
        "update-task",
        this.eId,
        this.eName,
        this.eDesc,
        this.eDuration,
        this.ePriority
      );
    },
    abortUpdate: function() {
      this.$emit("abort-update");
    },
  },
};
</script>
