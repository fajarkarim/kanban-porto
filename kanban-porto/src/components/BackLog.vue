<template lang="html">
  <div class="col-md-3">
    <div class="card">
      <div class="card-header bg-danger" style="color: white">
        BackLog
      </div>
      <div class="card-block">
        <div v-for="task in backLog" class="card mb-3">
          <div class="card-block">
            <a href="#" class="float-right" data-toggle="modal" :data-target="'#'+task['.key']+'delete'"><i class="fa fa-trash" aria-hidden="true"></i></a>
            <p class="card-title"><strong>{{ task.title }}</strong></p>
            <p class="card-text">Point: {{ task.point }}</p>
          </div>
          <div class="card-footer">
            <div class="row">
              <a class="col" href="#" data-toggle="modal" :data-target="'#'+task['.key']+'edit'">Edit</a>
              <a class="col" href="#" data-toggle="modal" :data-target="'#'+task['.key']+'details'">Details</a>
              <a class="col" href="#" data-toggle="modal" :data-target="'#'+task['.key']+'auth'">To-do</a>
            </div>
          </div>
          <DetailTaskModal :id="task['.key']+'details'" :taskDescription="task.description" :taskTitle="task.title"/>
          <EditTaskModal :id="task['.key']+'edit'" :task="task"/>
          <DeleteTaskModal :id="task['.key']+'delete'" :task="task"/>
          <AuthModal :id="task['.key']+'auth'" :task="task"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailTaskModal from '@/components/DetailTaskModal'
import EditTaskModal from '@/components/EditTaskModal'
import DeleteTaskModal from '@/components/DeleteTaskModal'
import AuthModal from '@/components/AuthModal'
export default {
  name: 'BackLog',
  components: {
    DetailTaskModal,
    EditTaskModal,
    DeleteTaskModal,
    AuthModal
  },
  firebase () {
    return {
      tasks: this.$db.ref('kanban')
    }
  },
  computed: {
    backLog () {
      return this.tasks.filter(task => task['status'] === 0)
    }
  }
}
</script>

<style lang="css">
</style>
