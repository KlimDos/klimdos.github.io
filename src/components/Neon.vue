<template>
  <div class="container mx-auto flex flex-col items-center p-4">
    <h1> Hello World</h1>
  </div>
</template>

<script>

  export default {
    name: 'Neon'
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    /* These three properties are where the magic happens: */
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 4px hsl(333deg 100% 50%);
    filter: 
      drop-shadow(0px 2px 2px hsl(0deg 0% 0% / 0.5))
      drop-shadow(0px 0px 4px hsl(333deg 100% 50% / 0.5))
      drop-shadow(0px 0px 10px hsl(333deg 100% 50% / 0.5))
      drop-shadow(0px 0px 50px hsl(333deg 100% 50% / 1));
  
    /* Fallback for IE */
    color: deeppink;
    
    /* Misc aesthetic properties */
    font-size: 68px;
    font-weight: 900;
    font-family: 'Raleway', sans-serif;
    letter-spacing: -1px;
  }
</style>
