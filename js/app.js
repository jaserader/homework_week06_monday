var Blog = Backbone.Model.extend({
  url: "http://tiny-starburst.herokuapp.com/collections/posts"
});

// var Blogs = Backbone.Collection.extend({
//   url: "http://tiny-starburst.herokuapp.com/collections/posts"
// });

var Person = Backbone.Model.extend({
  url: "http://tiny-starburst.herokuapp.com/collections/people"
});

// var Peoples = Backbone.Collection.extend({
//   url: "http://tiny-starburst.herokuapp.com/collections/people"
// });

////////////////////////////////////////////////////////////////////////////////

var BlogView = Backbone.View.extend({
  tagname: "form",
  template: _.template($('#blogInputTemplate').html()),

  events: {
    'click #blogSubmitBtn': 'handlerSubmitBtn'
  },

  send: function(){
    var submit = this.$('#blogSubmitBtn').val();
      console.log('click');

    var title = this.$("#blogTitle").val();
    var blogBody = this.$('#blogContent').val();

    var newBlog = new Blog({
       title: title,
       body: blogBody
    })
      newBlog.save();
  },

});

var ContactView = Backbone.View.extend({
  tagname: "form",
  template: _.template($('#peopleTemplate').html()),

  events: {
    'click #contactSubmitBtn': 'handlerSubmitBtn'
  },

  send: function(){
    var submit = this.$('#contactSubmitBtn').val();
      console.log('click');

    var firstName = this.$("#firstName").val();
    var lastName = this.$('#lastName').val();
    var address = this.$("#address").val();
    var phoneNumber = this.$('#phoneNumber').val();

    var newPerson = new Person({
       firstName: firstName,
       lastName: lastName,
       address: address,
       phoneNumber: phoneNumber,

    })
      newPerson.save();
  },


  render: function(){
    this.$el.html(this.template());
  },

  handlerSubmitBtn: function(event){
    event.preventDefault;
    this.send();
    // console.log(body);
  }

});

var BlogRouter = Backbone.Router.extend({

  routes: {
    "": "blogsEntry",
    "page2": "personEntry"
  },

  blogsEntry: function (){
    var view = new BlogView();
    view.render();
    $('#mainArea').html(view.$el);
  },

  personEntry: function (){
    var views = new ContactView();
    views.render();
    $('#mainArea').html(views.$el);
  }

});

var router = new BlogRouter();
Backbone.history.start();

// var blogView = new BlogView();
