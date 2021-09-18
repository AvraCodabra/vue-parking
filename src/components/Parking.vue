<template>
  <h1>{{ title }}</h1>
  <div v-if="parkingList">
    <ul>
      <li v-for="parklot in parkingList.slice(0,10)" :class="parklot.availability">
<!--        <div :class="parklot.availability" href="#">-->
          <h3>{{parklot.name}}</h3>
          <p>{{parklot.time}}</p>
          <p>{{parklot.status}}</p>
          <a :href="wazeURL(parklot.location)">ניווט</a>
<!--        </div>-->
      </li>
    </ul>
  </div>
  <div v-else>
    <h3>Loading..</h3>
  </div>
</template>
s
<script>
import {getParkinglots} from "../ParkingLot";

export default {
  name: "Parking",
  data(){
    return {
      title: 'Near Home Parking:',
      parkingList: null,
      test: 'https://waze.com/ul?ll=32.0885092,34.7799810&navigate=yes'
    }
  },
  methods:{
    wazeURL: function(location){
      return "https://waze.com/ul?ll="+location.lat+","+location.lon+"&navigate=yes";
    }
  },
  mounted() {
    getParkinglots()
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
  }
  li{
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
  li.free{
    color: white;
    background: #0b9a42;
  }
  li.almostFull{
    color: white;
    background: #c1a617;
  }
  li.full{
    color: white;
    background: #c22222;
  }
</style>