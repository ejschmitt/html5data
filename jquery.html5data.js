/*
 * html5data jQuery Plugin v1
 * http://github.com/ejschmitt/html5data
 *
 * Copyright (c) 2010 Erick Schmitt
 * Licensed under the MIT license.
 *
 */
 
(function (jQuery) {
  jQuery.fn.extend({
    _data : jQuery.fn.data,
    data  : function(key, value) {
      if (key && !value && this.attr('data-' + key)) {
        return this.attr('data-' + key);
      } else {
        return jQuery.fn._data(key, value);
      }
    }
  });
}(jQuery));