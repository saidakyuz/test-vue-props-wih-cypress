<template>
  <div>
    <h5>Sub Comp 4</h5>
    <b-form-group label="cSimpleString" label-cols="6">
      <b-form-input v-model="onChangeSimpleString"></b-form-input>
    </b-form-group>
    <b-form-group label="cobjectString.value" label-cols="6">
      <b-form-input v-model="onChangeObjectString.value"></b-form-input>
    </b-form-group>
    <b-form-group label="cSimpleArray[1]" label-cols="6">
      <b-form-input v-model="onChangeSimpleArray[1]"></b-form-input>
    </b-form-group>
    <b-form-group label="cobjectArray[1].value" label-cols="6">
      <b-form-input v-model="onChangeObjectArray[1].value"></b-form-input>
    </b-form-group>

  </div>
</template>

<script>
  export default {

    props: ['pSimpleString', 'pObjectString', 'pSimpleArray', 'pObjectArray'],

    // data() {
    //     return {
    //     ObjectString: this.pObjectString,
    //     SimpleString: this.pSimpleString,
    //     SimpleArray: this.pSimpleArray,
    //     ObjectArray: this.pObjectArray
    //     }
    // },


    computed: {
        onChangeSimpleString: function () {
            var cSimpleString=this.pSimpleString
            return cSimpleString
        },
        onChangeObjectString: function () {
            var cObjectString=this.pObjectString
            return cObjectString
        },
        onChangeSimpleArray: function () {
            var cSimpleArray=this.pSimpleArray
            return cSimpleArray
        },
        onChangeObjectArray: function () {
            var cObjectArray=this.pObjectArray
            return cObjectArray
        }
    }

  }
</script>

<style>

</style>