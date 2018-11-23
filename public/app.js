var app = new Vue({
    el: '.app',
    data: {
      userData : [],
      message: 'Hello Vue!',
      home : true,
      developer : false,
      lender : false,
      profileDev : false,
      profileLender : false
    },
    methods : {
      homePage : function(){
        this.home = true;
        this.developer = false;
        this.lender = false;
        this.profileDev = false;
        this.profileLender = false;
      },
      lendersPage : function(){
        this.home = false;
        this.developer = false;
        this.lender = true;
        this.profileDev = false;
        this.profileLender = false;
      },
      developerPage : function(){
        this.home = false;
        this.developer = true;
        this.lender = false;
        this.profileDev = false;
        this.profileLender = false;
      },
      devProfile : function(){
        this.home = false;
        this.developer = false;
        this.lender = false;
        this.profileDev = true;
        this.profileLender = false;
      },
      LenderProfile : function(){
        this.home = false;
        this.developer = false;
        this.lender = false;
        this.profileDev = false;
        this.profileLender = true;
      }
      // **********************************************************
      
    },
    mounted : function() {
      var self = this;
      axios.get('https://dev-lender.herokuapp.com/api/usersData').then(response =>{
          let data = response.data;
          this.userData = data.allData
      });

      axios.get('/api/').then(function(res) {}).catch(function(err) {});
      axios.post('/api/', {name : 'bob'}).then(function(res) {  }).catch(function(err) {});
    }
  })