var game=function()
{
  var o={
    actions:{},
    keydown:{},
  }
  window.addEventListener('keydown',function(event){
    // console.log(event)
    o.keydown[event.key]=true
  });
  window.addEventListener('keyup',function(event){
      o.keydown[event.key]=false
    });
    o.registerAction=function(key,callback)
    {
      o.actions[key]=callback
    }
  return o;
}
