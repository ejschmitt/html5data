(function (jQuery) {
  jQuery.fn.extend({
    _data : jQuery.fn.data,
    data  : function(key, value) {
      if (key && this.attr('data-' + key)) {
        return this.attr('data-' + key);
      } else {
        return jQuery.fn._data(key, value);
      }
    }
  });
}(jQuery));