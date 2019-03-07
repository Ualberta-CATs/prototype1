import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// import { Router } from './lib/router.js';

import './main.html';
import './templates.html';
import './lib/router.js';

Meteor.startup(function(){
    Router.addRoute('/login', 'loginTemplate');
    Router.addRoute('/profile', 'profileTemplate');
    Router.addRoute('/home', 'homeTemplate');

    console.log(Router.routes);
    Router.run();
});
