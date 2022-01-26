<template>
  <div>
    <h5>Sub Comp 3</h5>
    <b-form-group label="cSimpleString" label-cols="6">
      <b-form-input v-model="onChangeSimpleString"></b-form-input>
    </b-form-group>
    <b-form-group label="cobjectString.value" label-cols="6">
      <b-form-input v-model="onChangeObjectString"></b-form-input>
    </b-form-group>
    <b-form-group label="cSimpleArray[1]" label-cols="6">
      <b-form-input v-model="onChangeSimpleArray"></b-form-input>
    </b-form-group>
    <b-form-group label="cobjectArray[1].value" label-cols="6">
      <b-form-input v-model="onChangeObjectArray"></b-form-input>
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
            return cObjectString.value
        },
        onChangeSimpleArray: function () {
            var cSimpleArray=this.pSimpleArray
            return cSimpleArray[1]
        },
        onChangeObjectArray: function () {
            var cObjectArray=this.pObjectArray
            return cObjectArray[1].value
        }
    }

  }
</script>

<style>

</style>