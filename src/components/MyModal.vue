<template>
    <modal 
    name="hello-world" 
    height="auto"
    :clickToClose="false"
    :adaptive="true"
    >
      <h2 class="myh2">Account Details</h2>
    <form class="platform-form">
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input type="text" @keyup="iserr=false" class="form-control myinp" placeholder="Enter username" v-model="username">
        <small style="color:red;" v-if="iserr">Enter your Username</small>
     </div>
     <br />
     <div class="form-group">
        <label for="exampleFormControlSelect1">Select Platform</label>
        <select class="form-control myinp" id="exampleFormControlSelect1" v-model="platform">
        <option>Android</option>
        <option>iOS</option>
        </select>
    </div>
    <div class="row" style="margin-top:20px;">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
              <button type="button" class="btn btn-warning btn-block" @click.prevent="sendData">START</button>
          </div>
          </div>
    
    </form>
        </modal>
</template>
<script>

export default {
    props: {
        showNow: {default: false},
    },
    data() {
        return {
            username: "",
            platform: "Android",
            iserr: false,
        }
    },
    mounted() {
        
    },
    methods: {
        showModal() {
            this.$modal.show('hello-world');
        },
        hideModal() {
             this.$modal.hide('hello-world');
        },
        sendData() {
            if (this.username=='') {
                this.iserr = true
                return
            }
            let data = {
                'name' : this.username,
                'platform' : this.platform
            }
            this.$emit("submitted", data)

            this.hideModal()
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
<style>
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
.form-group {
    margin: 0 auto;
    max-width: 300px;
    text-align: left;
}
.myinp {
    background: #444;
    color: #fff;
    border: #000;
}
.platform-form {
    margin-top:30px;
}


</style>

