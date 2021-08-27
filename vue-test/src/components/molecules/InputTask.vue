<template>
  <div :class="$style.newTask">
    <h2>Какие планы на сегодня?</h2>
    <form @submit.prevent="submit">
      <input type="text" v-model="newInput" newTask-input />
      <Button id="addTask" />
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Button from "@/components/atoms/Button";
export default {
  name: "new-task",
  components: {
    Button,
  },
  data() {
    return {
      newInput: "",
    };
  },
  methods: {
    ...mapMutations(["addTask"]),
    submit() {
      this.addTask(this.newInput);
      this.newInput = "";
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.newTask {
  margin-left: 2rem;
  h2 {
    padding-top: 1rem;
  }
  input {
    margin-right: 0.6rem;
    height: 1.8rem;
    width: 62%;
    border: 0.1rem solid $main-color;
  }
}

@media screen and (max-width: 850px) {
  .newTask {
    h2 {
      font-size: 1.4rem;
    }
    margin-left: 1rem;
    input {
      margin-right: 0.1rem;
      height: 1.5rem;
      width: 58%;
    }
  }
}
</style>
