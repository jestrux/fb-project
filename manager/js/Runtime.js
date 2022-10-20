function b64EncodeUnicode(str){return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,function toSolidBytes(match,p1){return String.fromCharCode('0x'+p1);}));}
function b64DecodeUnicode(str){return decodeURIComponent(atob(str).split('').map(function(c){return '%'+('00'+c.charCodeAt(0).toString(16)).slice(-2);}).join(''));}
const Runtime={params:{},templates:{},setParam:function(name,value,parent){if(typeof parent!='undefined'){if(value){if(typeof this.params[parent]=='undefined'){this.params[parent]={};}
this.params[parent][name]=value;}}else{if(value){this.params[name]=value;}}
return this;},getParam:function(name,defaultValue,parent){let value=null;if(defaultValue){value=defaultValue;}
if(typeof parent!='undefined'){if(typeof this.params[parent]!='undefined'){if(typeof this.params[parent][name]!='undefined'){value=this.params[parent][name];}}}else if(typeof(this.params[name])!='undefined'){value=this.params[name];}
if(value){return value;}
return '';},addTemplate:function(name,content){this.templates[name]=b64DecodeUnicode(content);},getTemplate:function(name){return this.templates[name];},};