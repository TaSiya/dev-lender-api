new Vue({
    el: '#app',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
        .get('https://dev-lender.herokuapp.com/api/user')
        .then(response => {
            
        })
    }
  })