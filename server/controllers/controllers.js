const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = {
    index: function(req, res) {
        res.render("index");

    }, 
 

    users: function(req, res) {
        var user = new User({name: req.body.name, age: req.body.age});
        user.save(function(err) {
        if(err){
            console.log("We have an error!", err);
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        }
        else {
            res.redirect('view');
        }
    });
    },

    view: function(req, res) {
        User.find({}, function(err, x){
   
           res.render("view", {users: x});
   
       })
       },
}
