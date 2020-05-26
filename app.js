const app = new Vue({
  el: '#input-form',
  data: {
    url: "",
    pixel_size: "",
    transparent: "",
    image_type: "",
    show_url: false,
    errors: false,
    url_log: [],
    image_link: 'https://qrtag.net/api/qr_' + transparent + '_' + this.pixel_size + '.' + this.image_type + '?url=' + this.url
  },
  methods: {
  	generate_url: function(){
  		if (!this.url && !this.pixel_size && !this.transparent && !this.image_type){
  		  this.errors = true;
      } else {
        this.show_url = true;
        var url = 'https://qrtag.net/api/qr_' + this.transparent + '_' + this.pixel_size + '.' + this.image_type + '?url=' + this.url;
        localStorage.setItem('url', url);
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var h = today.getHours();
        var i = today.getMinutes();
        var s = today.getSeconds();
        var date = dd + '/' + mm + '/' + yyyy + ' ' + h + ':' + i + ':' + s;
        date = Object.values(date).join("");
        if (localStorage.getItem('url')){
          this.url_log.push({date: Object.values(date).join(""), code: localStorage.getItem('url')});
        } 
      }
  	},
    on_change: function(value){
      console.log(value);
    }
  },
  mounted() {
    console.log('App mounted!');
    
 }
});