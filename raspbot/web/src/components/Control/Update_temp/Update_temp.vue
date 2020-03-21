<template>
  <div id="content">
    <div class="heading">Zmień temp otwierania okna</div>
    <Loader v-if="this._loading()"/>
    <div id="container" v-if="!this._loading()">
      <div class="update__input">
        <input type="number" max="40" min="10" name="username" placeholder="Temperatura otwierania okna" v-model="value">
      </div>
      <div class="update__buttons update__buttons--change">
        <div class="button" v-on:click="_decrease">-</div>
        <div class="button" v-on:click="_increase">+</div>
      </div>
      <div class="update__buttons" v-if="this._displayActions()">
        <div class="button red" v-on:click="_reverTemp">Anuluj</div>
        <div class="button" v-on:click="_updateTemp">Zapisz</div>
      </div>
      <div>{{this.contentMessage}}</div>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Common/Spinner/Spinner.vue';
import Content from '@/components/Common/Content/Content.vue';
import Progress from '@/components/Control/Update/Progress.vue';
import Changelog from '@/components/Control/Update/Changelog.vue';
import { data, created, methods, beforeDestroy } from '@/components/Control/Update_temp/update.js';
import Loader from 'vue-spinner/src/ScaleLoader.vue'
export default {
  name: 'UpdateTemp',
  components: { Progress, Changelog, Spinner, Content, Loader },
  data: data,
  created: created,
  methods: methods,
  beforeDestroy: beforeDestroy,
}
</script>

<style scoped src="@/shared/general.css"></style>
<style scoped src="@/components/Settings/main.css"></style>
<style scoped src="@/components/Settings/Account/Password/password.css"></style>
<style scoped src="@/components/Control/Update_temp/update.css"></style>
