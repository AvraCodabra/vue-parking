<template>
  <h1>{{ title }}</h1>
  <div v-if="parkingList">
    <ul>
      <li v-for="parklot in parkingList.slice(0,10)" :class="parklot.availability">
        <h3>{{parklot.name}}</h3>
        <p>{{parklot.time}}</p>
        <p>{{parklot.status}}</p>
      </li>
    </ul>
  </div>
  <div v-else>
    <h3>Loading..</h3>
  </div>
</template>

<script>
import {getParkinglots} from "../ParkingLot";

export default {
  name: "Parking",
  data(){
    return {
      title: 'Near Home Parking:',
      parkingList: null,
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
  p,h3,ul{
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