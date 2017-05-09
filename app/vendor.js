import _ from 'lodash';
import $ from 'jquery';
import '../bootstrap/bootstrap';
import '../bootstrap/bootstrap.less'; 
function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
