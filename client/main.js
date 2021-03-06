import React      from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from './App.jsx'
import './assets/fonts.css';

Meteor.startup( () => {
	render(<App/>, document.getElementById('root'));
});
