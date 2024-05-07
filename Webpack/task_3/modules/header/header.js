import $ from 'jquery';
import './header.css';


console.log('Init header');

const $header = $(`
  <header>
    <div id="logo"></div>
    <h1>Holberton Dashboard</h1>
  </header>
`);

$('body').append($header);
