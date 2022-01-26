<template>
  <div>
    <h5>Sub Comp</h5>
    <b-form-group label="SimpleString" label-cols="6">
      <b-form-input v-model="pSimpleString"></b-form-input>
    </b-form-group>
    <b-form-group label="objectString.value" label-cols="6">
      <b-form-input v-model="pObjectString.value"></b-form-input>
    </b-form-group>
    <b-form-group label="SimpleArray[1]" label-cols="6">
      <b-form-input v-model="pSimpleArray[1]"></b-form-input>
    </b-form-group>
    <b-form-group label="objectArray[1].value" label-cols="6">
      <b-form-input v-model="pObjectArray[1].value"></b-form-input>
    </b-form-group>

  </div>
</template>

<script>
  export default {

    props: ['pSimpleString', 'pObjectString', 'pSimpleArray', 'pObjectArray'],

    // data() {
    //   return {
    //     dObjectString: this.pObjectString
    //   }
    // }
    // {
    //   pSimpleString: String,
    //   pObjectString: Object,
    //   pSimpleArray: Array,
    //   pObjectArray: Array
    // }

  }
</script>

<style>

</style>