<template>
    <modal 
    name="this-world" 
    height="auto"
    :clickToClose="false"
    :adaptive="true"
    >
      <h2 class="myh2">Human Verification</h2>
    <p>Automatic human verification has failed!<br>Click the <b>Verify</b> button to do it manually</p>
    
        <!-- Loading start -->
        <div class="lds-css">
            <img src="../assets/spin.gif">
        </div>
        <!-- loading end -->
        <a class="btn btn-warning" :href="link">VERIFY</a> 
    
    </modal>
</template>
<script>

export default {
    props: {
        showNow: {default: false},
        link : {default: "#"}
    },
    data: ()=> {
        return {
            
        }
    },
    methods: {
        showModal() {
            this.$modal.show('this-world');
        },
        hideModal() {
             this.$modal.hide('this-world');
        }
    },
    watch: {
        showNow(newval,oldval) {
            if(newval==oldval) return;

            if(newval){
                this.showModal()
            }
            else {
                this.hideModal()
            }
        }
    }
}
</script>
<style scoped>
.v--modal-overlay {
  background: rgba(0,0,0,0.8)!important;
}
.v--modal {
    background-color: #222!important;
    color:white!important;
    padding: 10px!important;
    text-align: center!important;
}
.myh2 {
  font-family: 'Anton', sans-serif;
  color: #fddb17;
  text-shadow: 2px 2px 0 #000;
}

.lds-css {
    margin:20px auto;
}
.lds-css img {
    height: 80px;
    width: 80px;
    opacity: 0.5;
}
.btn {
    padding: 20px;
    letter-spacing: 5px;
    margin-bottom: 20px;
}
p {
    color: gray;
    font-size: 15px;
}
</style>

