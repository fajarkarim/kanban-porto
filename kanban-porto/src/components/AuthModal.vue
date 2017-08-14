<template lang="html">
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Change status to {{ status[task.status] }} ?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button @click="editStatus()" type="button" class="btn btn-primary" data-dismiss="modal">Yes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task'],
  data () {
    return {
      status: ['Todo', 'Doing', 'Done']
    }
  },
  methods: {
    editStatus (status) {
      this.$store.dispatch('editStatus', this.task)
    }
  }
}
</script>

<style lang="css">
</style>
