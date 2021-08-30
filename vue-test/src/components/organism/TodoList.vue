<template>
  <div>
    <div :class="$style.tasksSection">
      <InputTask />
      <div :class="$style.radioBtn">
        <RadioButtons
          v-for="radioButton of radioBtns"
          :key="radioButton.id"
          :buttonTitle="radioButton.buttonTitle"
          :id="radioButton.id"
          :isPicked="radioButton.isPicked"
        />
      </div>
      <div v-if="showTasks.length > 0" :class="$style.taskList">
        <ListItem
          v-for="todo of showTasks"
          :key="todo.id"
          :id="todo.id"
          :title="todo.title"
          :isChecked="todo.isChecked"
        />
      </div>
      <div :class="$style.noTaskMessage" v-else>
        Список заданий пуст
      </div>
      <div :class="$style.manageTasks">
        <Button id="allDone" title="Выполнить всё" />
        <Button id="allDelete" title="Удалить всё" />
      </div>
    </div>
    <p :class="$style.taskLeft">
      Молодец! Ты выполнил уже: <span id="result">{{ showResult }}</span>
    </p>
  </div>
</template>

<script>
import InputTask from "@/components/molecules/InputTask";
import ListItem from "@/components/atoms/ListItem";
import Button from "@/components/atoms/Button";
import RadioButtons from "@/components/atoms/RadioButtons";
import { mapGetters } from "vuex";

export default {
  name: "todoList",
  computed: {
    ...mapGetters(["radioBtns", "showTasks", "showResult"]),
  },
  mounted() {
    this.$store.dispatch("getFromStorage");
  },
  components: {
    InputTask,
    ListItem,
    Button,
    RadioButtons,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.tasksSection {
  background-color: $font-color;
  padding-bottom: 1rem;
  .radioBtn {
    width: 100%;
    display: flex;
    margin: 2rem 0;
    justify-content: center;
  }
  .taskList {
    list-style: none;
    padding: 0;
    margin: 2rem 2rem 1rem 2rem;
  }
  .noTaskMessage {
    width: 87%;
    min-height: 6rem;
    margin: 2rem auto;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $main-color;
  }
  .manageTasks {
    display: flex;
    justify-content: space-between;
    margin: 0 2rem;
  }
}
.taskLeft {
  text-align: center;
  color: $font-color;
  font-size: 1.3rem;
}

@media screen and (max-width: 850px) {
  .tasksSection {
    .radioBtn {
      margin: 1rem 0;
    }
    .noTaskMessage {
      font-size: 1.3rem;
    }
    .taskList {
      margin: 1rem;
    }
    .manageTasks {
      margin: 0 1rem;
    }
  }
  .taskLeft {
    font-size: 1.15rem;
  }
}
</style>
