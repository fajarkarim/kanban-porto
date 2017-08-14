<template lang="html">
  <div class="modal fade" abindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="EditTaskModalTaskLabel">Edit Task</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="title">Title:</label>
              <input v-model="title" class="form-control" type="text">
            </div>
            <div class="form-group">
              <label for="title">Description:</label>
              <textarea v-model="description" class="form-control" type="text" rows="5"></textarea>
            </div>
            <div class="form-group">
              <label for="title">Assignee:</label>
              <input v-model="assignee" class="form-control" type="text">
            </div>
            <div class="form-group">
              <label for="title">Point:</label>
              <input v-model="point" class="form-control" type="text">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button @click="saveEditedTask" type="button" class="btn btn-primary btn-outline-success" data-dismiss="modal">Create</button>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'EditTaskModal',
  props: ['task'],
  data () {
    return {
      title: this.task.title,
      description: this.task.description,
      point: this.task.point,
      assignee: this.task.assignee
    }
  },
  methods: {
    saveEditedTask () {
      this.$store.dispatch('saveEditedTask', {
        title: this.title,
        description: this.description,
        point: this.point,
        assignee: this.assignee,
        status: this.task.status,
        key: this.task['.key']
      })
    }
  }
}
</script>

<style lang="css">
</style>
