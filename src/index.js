import home from './home';
import menu from './menu';
import nav from './nav';
import contact from './contact';

const body = document.getElementsByTagName('body')[0];
body.prepend(nav());

const contentDiv = document.getElementById('content');
contentDiv.append(home());
contentDiv.append(menu());
contentDiv.append(contact());
