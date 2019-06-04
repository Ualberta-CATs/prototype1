import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from './lib/router.js';
//FIXME: we won't need this after removing blaze, I think. AH. 
import './main.html';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
