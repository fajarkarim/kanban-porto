<template lang="html">
  <div class="col-3">
    <div class="card">
      <div class="card-header">
        Todo
      </div>
      <div class="card-block">
        <div v-for="task in todos" class="card mb-3">
          <div class="card-block">
            <p class="card-title"><strong>{{ task.title }}</strong></p>
            <p class="card-text">Point: {{ task.point }}</p>
          </div>
          <div class="card-footer">
            <div class="row">
              <a class="col" href="#" data-toggle="modal" :data-target="'#'+task['.key']+'edit'">Edit</a>
              <a class="col" href="#" data-toggle="modal" :data-target="'#'+task['.key']+'details'">Details</a>
              <a class="col" href="#" data-toggle="modal" :data-target="'#'+task['.key']+'auth'">Doing</a>
            </div>
          </div>
          <DetailTaskModal :id="task['.key']+'details'" :taskDescription="task.description" :taskTitle="task.title"/>
          <EditTaskModal :id="task['.key']+'edit'" :task="task"/>
          <AuthModal :id="task['.key']+'auth'" :task="task"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailTaskModal from '@/components/DetailTaskModal'
import EditTaskModal from '@/components/EditTaskModal'
import AuthModal from '@/components/AuthModal'
export default {
  name: 'Todo',
  components: {
    DetailTaskModal,
    EditTaskModal,
    AuthModal
  },
  firebase () {
    return {
      tasks: this.$db.ref('kanban')
    }
  },
  computed: {
    todos () {
      return this.tasks.filter(task => task['status'] === 1)
    }
  }
}
</script>

<style lang="css">
</style>
