<template>
  <div class="main">

    <b-card>
      <b-row>
        <b-col cols="4">
          <h5>Main Comp</h5>
          <b-form-group label="SimpleString" label-cols="6">
            <b-form-input v-model="simpleString"></b-form-input>
          </b-form-group>
          <b-form-group label="objectString.value" label-cols="6">
            <b-form-input v-model="objectString.value"></b-form-input>
          </b-form-group>
          <b-form-group label="SimpleArray[1]" label-cols="6">
            <b-form-input v-model="simpleArray[1]"></b-form-input>
          </b-form-group>
          <b-form-group label="objectArray[1].value" label-cols="6">
            <b-form-input v-model="objectArray[1].value"></b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-row class="pt-3">
            <b-col>
              <b-card>
                <r-sub-comp :pSimpleString="simpleString" :pSimpleArray="simpleArray" :pObjectString="objectString"
                  :pObjectArray="objectArray"></r-sub-comp>
              </b-card>
            </b-col>
            <b-col>
              <b-card>
                <r-sub-comp :pSimpleString="simpleString" :pSimpleArray="simpleArray" :pObjectString="objectString"
                  :pObjectArray="objectArray"></r-sub-comp>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card>

  </div>
</template>

<script>
  import RSubComp from './RSubComp.vue'
  export default {
    components: {
      RSubComp
    },

    data() {
      return {
        simpleString: "Just a text",
        objectString: {
          name: 'sample',
          value: 'Object value'
        },
        simpleArray: [1, 2, 3],
        objectArray: [{
          key: "k10",
          value: 10
        }, {
          key: "k11",
          value: 11
        }]
      }
    }

  }
</script>

<style>

</style>