<template>
  <label class="checkboxLabel" :class="{ done: isChecked }">
    <input type="checkbox" :checked="isChecked" @click="change" />
    <span class="checkboxText">{{ title }}</span>
    <button @click="remove"></button>
  </label>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    id: String,
    title: String,
    isChecked: Boolean,
  },
  methods: {
    ...mapMutations(["deleteTask", "changeTaskStatus"]),
    change() {
      this.changeTaskStatus(this.id);
    },
    remove() {
      this.deleteTask(this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
.checkboxLabel {
  border: 1px solid $main-color;
  border-radius: 0.4rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  span {
    display: inline-flex;
    align-items: center;
    user-select: none;
    max-width: 19rem;
  }
  span::before {
    content: "";
    display: inline-block;
    flex-shrink: 0;
    flex-grow: 0;
    border: 0.05rem solid $main-color;
    border-radius: 0.25em;
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.5rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  input:checked + span::before {
    border-color: $main-color;
    background-color: $main-color;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    background-size: 0.8rem;
  }
  button {
    border-radius: 50%;
    background-color: $main-color;
    border: none;
    font-weight: bold;
    color: $font-color;
    width: 1.7rem;
    height: 1.7rem;
    position: relative;
    margin-left: 0.5rem;
  }
  button:before,
  button:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 0.8rem;
    width: 0.15rem;
    background-color: $font-color;
    left: 0.8rem;
    top: 0.45rem;
  }
  button:before {
    transform: rotate(45deg);
  }
  button:after {
    transform: rotate(-45deg);
  }
}
.done {
  text-decoration: line-through;
}

@media screen and (max-width: 850px) {
  .checkboxLabel {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    span {
      max-width: 12rem;
    }
    button {
      width: 1.5rem;
      height: 1.5rem;
    }
    button:before,
    button:after {
      height: 0.8rem;
      width: 0.15rem;
      left: 0.7rem;
      top: 0.33rem;
    }
  }
}
</style>
