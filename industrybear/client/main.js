import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

//FIXME: I think there is a way to import the folders
import './home/home.html'
import './home/home.js';
import './login/login.html';
import './login/login.js';
import './profile/profile.html';
import './profile/profile.js';
import './lib/router.js';

Meteor.startup(function(){
    Router.addRoute('/login', 'loginTemplate');
    Router.addRoute('/profile', 'profileTemplate');
    Router.addRoute('/home', 'homeTemplate');

    console.log(Router.routes);
    Router.run();
});
