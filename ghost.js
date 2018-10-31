var ghost=function()
{
  var o=
  {
    x:0,
    y:0,
    w:80,
    h:80,
    image:"ghost_left.png",
    moveleft:function(){
      this.x=this.x-10;
      this.image="ghost_left.png";
    },
    moveright:function(){
      this.x=this.x+10
      this.image="ghost_right.png";
    },
    moveup:function(){
      this.y=this.y-10;
    },
    movedown:function(){
      this.y=this.y+10
    },
  }
  return o;
}
