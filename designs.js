// Select color input
let color = $('#colorPicker').val();
// Select size input
let N = $('#inputHeight').val();
let M = $('#inputWeight').val();
  
$(document).ready(function() {
    
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
    event.preventDefault();
   
    makeGrid();
    Color();
  
  });
});

function makeGrid() {
  $('tr').remove();
        
// Your code goes here!
let N = $('#inputHeight').val();
let M = $('#inputWeight').val();
  
    for (let i = 1; i <= N; i++) {
      $('#pixelCanvas').append('<tr></tr>');
      for (let j = 1; j <= M; j++) {
        $('tr').filter(':last').append('<td></td>');
      }
    }
}
 function Color(){
    const cells = $('td');
    cells.click(function () {
        let color = $('#colorPicker').val();
      
      ($( this ).attr('style')) ? 
      $( this ).removeAttr('style') : 
      $( this ).attr('style','background-color:' + color);
    });
  }
  