<template lang="html">
  <div class="">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#newTask">
      New Task
    </button>

    <!-- Modal -->
    <div class="modal fade" id="newTask" tabindex="-1" role="dialog" aria-labelledby="newTaskLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newTaskLabel">New Task</h5>
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
            <button @click="createNewTask" type="button" class="btn btn-primary btn-outline-success" data-dismiss="modal">Create</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'newTaskModal',
  data () {
    return {
      title: '',
      description: '',
      assignee: '',
      point: 0,
      modalState: '',
      status: 0
    }
  },
  methods: {
    createNewTask () {
      this.$store.dispatch('createNewTask', {
        title: this.title,
        description: this.description,
        assignee: this.assignee,
        point: this.point,
        status: this.status
      })
      this.clearState()
    },
    clearState () {
      this.title = ''
      this.description = ''
      this.assignee = ''
      this.point = 0
    }
  }
}
</script>

<style lang="css">
</style>
