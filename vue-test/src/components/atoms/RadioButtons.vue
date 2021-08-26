<template>
  <label :class="$style.filterLabel">
    <input type="radio" name="filter" :checked="isPicked" @click="change" />
    <span>{{ buttonTitle }}</span>
  </label>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    id: String,
    buttonTitle: String,
    isPicked: Boolean,
  },
  methods: {
    ...mapMutations(["changeFilter", "changeFilterStatus"]),
    change() {
      this.changeFilter(this.id);
      this.changeFilterStatus(this.id);
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.filterLabel {
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  span {
    padding: 0.6rem 0.38rem;
    display: inline-flex;
    align-items: center;
    user-select: none;
    border: 0.05rem solid $main-color;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.05rem;
    width: 7.8rem;
    max-width: 15rem;
    justify-content: center;
  }
  input:checked + span {
    border-color: $main-color;
    background-color: $main-color;
    color: $font-color;
  }
}

@media screen and (max-width: 750px) {
  .filterLabel {
    span {
      font-size: 0.7rem;
      width: 4.8rem;
      margin: 0;
    }
  }
}
</style>
