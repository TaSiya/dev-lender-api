var app = new Vue({
    el: '.app',
    data: {
      message: 'Hello Vue!',
      showA : true,
      showB : false
    },
    mounted : function() {
      var self = this;
      setTimeout(function() {
        self.showA = false;
        self.showB = true;
      }, 3000);

      // axios.get('/api/').then(function(res) {}).catch(function(err) {});
      // axios.post('/api/', {name : 'bob'}).then(function(res) {  }).catch(function(err) {});
    }
  })