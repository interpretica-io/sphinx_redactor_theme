
function has_class(el, className) {
  if (el.classList)
    return el.classList.contains(className);
  else
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
}

function add_class(el, className) {
  if (el.classList)
    el.classList.add(className);
  else
    el.className += ' ' + className;
}

function toggle_class(el, className) {
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

    el.className = classes.join(' ');
  }
}


function wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}

function add_event(el, event, func, bool) {
  if (!event) return;

  if (el.addEventListener)
    el.addEventListener(event, func, !!bool);
  else
    el.attachEvent('on'+event, func);
}

var i = 0;
var tables = document.querySelectorAll('table.docutils');

for ( i=0; i<tables.length; i++)
  if (!has_class(tables[i], 'footnote') && !has_class(tables[i], 'field-list')) {
    var wrapper = document.createElement('div');
    wrapper.className = 'jast-responsive-table';
    wrap(tables[i], wrapper);
  }

var nav_toggle = document.getElementById('js-navigation-toggle');
var nav = document.getElementById('js-sidebar');

add_event(nav_toggle, 'click', function() {
  toggle_class(document.body, 'mobile-menu-open');
});
