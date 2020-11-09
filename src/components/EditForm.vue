<template>
  <div>
    <input type="text" placeholder="Name" v-model="eName" />
    <input type="text" placeholder="Description" v-model="eDesc" />
    <input type="text" placeholder="Duration" v-model="eDuration" />
    <input type="text" placeholder="priority" v-model="ePriority" />
    <button @click="updateFormVis(), updateTask(eId, eName, eDesc, eDuration, ePriority)">Update</button>
    <button @click="updateFormVis">Cancel</button>
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
  inject : ['updateTask'],
  methods: {
    updateFormVis: function() {
      this.$emit("update-vis");
    },
  },
};
</script>
