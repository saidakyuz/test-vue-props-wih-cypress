<template>
  <div>
    <h5>Sub Comp 2</h5>
    <b-form-group label="dSimpleString" label-cols="6">
      <b-form-input v-model="dSimpleString"></b-form-input>
    </b-form-group>
    <b-form-group label="dobjectString.value" label-cols="6">
      <b-form-input v-model="dObjectString.value"></b-form-input>
    </b-form-group>
    <b-form-group label="dSimpleArray[1]" label-cols="6">
      <b-form-input v-model="dSimpleArray[1]"></b-form-input>
    </b-form-group>
    <b-form-group label="dobjectArray[1].value" label-cols="6">
      <b-form-input v-model="dObjectArray[1].value"></b-form-input>
    </b-form-group>

  </div>
</template>

<script>
  export default {

    props: ['pSimpleString', 'pObjectString', 'pSimpleArray', 'pObjectArray'],

    data() {
      return {
        dSimpleString: this.pSimpleString,
        dObjectString: this.pObjectString,
        dSimpleArray: this.pSimpleArray,
        dObjectArray: this.pObjectArray
      }
    }
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