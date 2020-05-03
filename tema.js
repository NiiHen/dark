//<![CDATA[
// Jquery cookie
$(() => {
  const theme = 'dark';
  const darkMode = localStorage.getItem(theme);
  $('html').toggleClass(theme, darkMode === 'true');
  $('#' + theme).prop('checked', darkMode === 'true').click(function() {
    $("html").toggleClass(theme, $(this).is(':checked'));
    localStorage.setItem(theme, String($(this).is(':checked')));
  });
});
//]]>

$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://cdn.jsdelivr.net/gh/NiiHen/dark@master/gaya.css') );
document.write("<div class='theme'><label class='switch'><input id='dark' name='toggle-flip' type='checkbox'/><span class='geser round'/></label></div>");
