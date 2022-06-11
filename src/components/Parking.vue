<template>
  <h2>
  <dropdown class="my-dropdown-toggle"
            :options="arrayOfObjects"
            :selected="selectedArea" v-on:updateOption="methodToRunOnSelect"></dropdown>
    {{ title }}
  </h2>
  <div v-if="parkingList">
    <p>last update: {{parkingList[0].time}}</p>
    <ul>
      <li v-for="parklot in parkingList.slice(0,11)">
        <div class="slot" :class="parklot.availability">
          <h3>{{parklot.name}}</h3>
          <a :href="wazeURL(parklot.location)">
            <span class="link-spanner"></span>
          </a>
          <p>{{parklot.status}}</p>
        </div>
      </li>
    </ul>
  </div>
  <div v-else>
    <h3>Loading..</h3>
  </div>
</template>

<script>
import {getParkinglots, sortNearMe} from "../ParkingLot";
import dropdown from 'vue-dropdowns';


export default {
  name: "Parking",
  data(){
    return {
      title: ':חניונים באזור',
      parkingList: null,
      arrayOfObjects: [{
        name: "הצפון הישן",
        location: {
          lat:32.0873,
          lon:34.7737}
      },{
        name: "הצפון החדש",
        location: {
          lat:32.088825,
          lon:34.790115}
      },{
        name: "לב העיר",
        location: {
          lat:32.067596,
          lon:34.775948}
      },{
        name: "דרום העיר",
        location: {
          lat:32.055776,
          lon:34.768095}
      }],


      selectedArea: {
        name: "הצפון הישן",
        location: {
          lat:32.0873,
          lon:34.7737}
      }

    }
  },

  components: {
    'dropdown': dropdown,
  },

  methods:{
    wazeURL: function(location){
      return "https://waze.com/ul?ll="+location.lat+","+location.lon+"&navigate=yes";
    },
    methodToRunOnSelect(payload) {
      this.selectedArea = payload;

      sortNearMe(this.parkingList,this.selectedArea.location)
    }
  },
  mounted() {
    getParkinglots(this.selectedArea.location)
        .then(data => this.parkingList = data)
        .catch(e =>{
      console.error('Error!');
      console.log(e);
    })
  }
}
</script>


<style scoped>
  body{
    background: #eee;
    max-width: 960px;
    margin: 20px auto;
  }
  p,h3,ul,a{
    margin: 0;
    padding: 0;
    list-style-type: none; /* Remove bullets */
  }
  div.slot{
    position:relative;
    list-style-type: none;
    background: #fff;
    margin: 20px auto;
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
  div.free{
    color: white;
    background: #0b9a42;
  }
  div.almostFull{
    color: white;
    background: #eec500;
  }
  div.full{
    color: white;
    background: #c22222;
  }
  .link-spanner{
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left: 0;
    z-index: 1;
  }
</style>