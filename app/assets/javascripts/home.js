// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

window.addEventListener('load', function(){
  console.log('window loaded');
  const api_key = '5e182bf346c2bb165ff896592d5b9807'
  const uri = 'api.openweathermap.org/data/2.5/weather?q=Miami&APPID=' + api_key
  console.dir($.get(uri));
  // console.log('haha');
})

$(function(){
  console.log('jquery');
})