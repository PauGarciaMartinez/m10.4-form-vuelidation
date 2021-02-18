<!-- TEMPLATE -->

<template>
  <label>{{ labelName }}</label>
  <slot></slot>
  <small v-if="!isValid && inputName !== ''" class="isInvalid">
  {{ inputError }}</small>
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/validation.js"></script>

<!-- STYLE -->
<style src="./../styles/css/validation.css"></style>
