<template>
    <div>
         {{displayNumber}}
    </div>
</template>
<script>
export default {
    props:{'number':{default:0}},
    data: function(){
    
        return {
        
        displayNumber:0,
        interval:false
        
        }
    
    },
    
    ready:function(){
    
        this.displayNumber = this.number ? this.number : 0;
    
    },
    
    watch:{
    
        number: function(){
        
            clearInterval(this.interval);
        
                if(this.number == this.displayNumber){
            return;
            }
        
            this.interval = window.setInterval(function(){
            
                if(this.displayNumber != this.number){
            
                    var change = (this.number - this.displayNumber) / 4;
                
                change = change >= 0 ? Math.ceil(change) : Math.floor(change);
            
                this.displayNumber = this.displayNumber + change;
            
            }
            
            }.bind(this), 20);
        
        }
    
    },
    mounted() {
        this.displayNumber = this.number ? this.number : 0;
    }
}
</script>
<style scoped>
div {
    font-size:2em;
  font-family: 'Anton', sans-serif;
  color: #fddb17;
  text-shadow: 2px 2px 0 #000;
  height: 100%;
}
/* @media only screen and (max-width: 600px) {
    div {
        font-size:1.4em;
        vertical-align: middle;
    }
} */
</style>

