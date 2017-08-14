<template lang="html">
  <div class="col-3">
    <div class="card">
      <div class="card-header">
        BackLog
      </div>
      <div class="card-block">
        <div v-for="task in backLog" class="card">
          <div class="card-block">
            <p class="card-title"><strong>{{ task.title }}</strong></p>
            <p class="card-text">Point: {{ task.point }}</p>
          </div>
          <div class="card-footer">
            <div class="row">
              <a class="col" href="#" data-toggle="modal" data-target="#editTask">Edit</a>
              <a class="col" href="#" data-toggle="modal" data-target="#detailTask">Details</a>
              <a class="col" href="#">To-do</a>
            </div>
          </div>
          <DetailTaskModal :taskDescription="task.description" :taskTitle="task.title"/>
          <EditTaskModal :taskTitle="task.title" :taskDescription="task.description" :taskAssignee="task.assignee" :taskPoint="task.point" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailTaskModal from '@/components/DetailTaskModal'
import EditTaskModal from '@/components/EditTaskModal'
export default {
  name: 'BackLog',
  components: {
    DetailTaskModal,
    EditTaskModal
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
