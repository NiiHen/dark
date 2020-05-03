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
