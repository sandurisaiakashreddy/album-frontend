<template>
<div>
   <br>
<div class="w3-card-4">
  <div  class="w3-container w3-blue">

 <h4> Login</h4>
       </div>

       <h4><div class="error w3-text-red" v-html="error"></div></h4>
       <br>
       <h4>Please Enter Email</h4>
       <input type="text"  name="email" class="w3-input w3-border w3-sand"  placeholder="email"
    v-model="email"
   />
   <br>
   <h4>Please enter Password</h4>
   <input type="password" class="w3-input w3-border w3-sand"
          name="password"
          placeholder="Enter the Password"
          v-model="password"
   /><br>
   <br>

    <button @click="login" class="w3-btn w3-blue">log-in</button>
    <br><br>
</div>
</div>
</template>

<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://www.w3schools.com/w3css/4/w3.css";
</style>
