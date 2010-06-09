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
    dataAttr  : function(key, value) {
      if (key && !value) {
        return this.attr('data-' + key);
      } else if (value) {
        return this.attr('data-' + key, value);
      }
    }
  });
}(jQuery));