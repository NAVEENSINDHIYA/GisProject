var map;

function clear(m)
{
map=m;
}

function activateclear()
{
  
    setCurser('');
}
function setCurser(cursorType){
    if (map) {
        
      const target = map.getTarget();
      // jQuery hack to convert the mouse cursor to a crosshair
      const jTarget = typeof target === 'string' ? $('#' + target) : $(target);
      jTarget.css('cursor', cursorType);
    }
}