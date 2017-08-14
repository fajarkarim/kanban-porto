<template lang="html">
  <div class="container-fluid">
    <div class="pb-3">
      <newTaskModal/>
    </div>
    <div class="row">
      <BackLog/>
      <Todo/>
      <Doing/>
      <Done/>
    </div>
  </div>
</template>

<script>
import BackLog from '@/components/BackLog'
import Todo from '@/components/Todo'
import Doing from '@/components/Doing'
import Done from '@/components/Done'
import newTaskModal from '@/components/newTaskModal'
export default {
  name: 'MainContent',
  components: {
    BackLog,
    Todo,
    Doing,
    Done,
    newTaskModal
  }
}
</script>

<style lang="css">
</style>
