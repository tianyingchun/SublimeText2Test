var extend=function (subclass,supperclass) {
	  var F=new function(){};
	  F.prototype=supperclass.prototype;
	  subclass.prototype=new F();
}