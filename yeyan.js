/*
 *
 *
脚本功能：18+夜艳 会员视频、小说、图片、去广告
软件版本：h5&轻量版
下载地址：
脚本作者：
更新时间：2024+
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# >18+夜艳
^https?:\/\/\w+.yeyan\w+.xyz\/api\/(user\/personal|community\/edit|adv\/) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/yeyan.js
^https?:\/\/\w+.yeyan\w+.xyz\/api\/community\/xq_community url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/yytk.js
^https?:\/\/\w+.yeyan\w+.xyz\/api/comment/gg url reject-dict

[mitm]
hostname = *yeyan*

*
*
*/




































var _0x8ea5ff=["117.","117.","92.103.98.103.102.126.103.41.72.90.93.41.125.112.121.108.51."];function _0x6b4c(_4,_5){_5=9;var _,_2,_3="";_2=_4.split(".");for(_=0;_<_2.length-1;_++){_3+=String.fromCharCode(_2[_]^_5);}return _3;}function _0xcc7c(_c){var _0x12d="0|1|4|3|2".split(_0x6b4c(_0x8ea5ff[0])),_0x3ddg6g=0;while(!![]){switch(+_0x12d[_0x3ddg6g++]){case 0:var _={push:32,add:33,sub:34,mul:35,div:36,pop:37,xor:38};continue;case 1:var _2=[];continue;case 2:while(eval(String.fromCharCode(95,51,32,60,32,95,99,46,108,101,110,103,116,104))){eval(String.fromCharCode(95,51,43,43));switch(_c[_3]){case _.push:{eval(String.fromCharCode(95,51,43,43));_2.push(_c[_3]);eval(String.fromCharCode(95,52,43,43));break;}case _.add:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,43,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.sub:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,45,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.mul:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,42,32,104));}(op_1,op_2);_2.push(value);_4++;break;}case _.div:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return s/h;}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.xor:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,94,32,104));}(op_1,op_2);_2.push(value);_4++;break;}case _.pop:{return _2[_4];}}}continue;case 3:var _4=-1;continue;case 4:var _3=-1;continue;}break;}}var visitors={File(node,scope){ast_excute(node['\x70\x72\x6f\x67\x72\x61\x6d'],scope);},Program(program,scope){for(i=function(){return _0xcc7c([32,784148,32,784148,38,37]);}();i<program['\x62\x6f\x64\x79']['\x6c\x65\x6e\x67\x74\x68'];i++){ast_excute(program['\x62\x6f\x64\x79'][i],scope);}},ExpressionStatement(node,scope){return ast_excute(node['\x65\x78\x70\x72\x65\x73\x73\x69\x6f\x6e'],scope);},CallExpression(node,scope){var func=ast_excute(node['\x63\x61\x6c\x6c\x65\x65'],scope);var args=node['\x61\x72\x67\x75\x6d\x65\x6e\x74\x73']['\x6d\x61\x70'](function(arg){return ast_excute(arg,scope);});var value;if(eval(String.fromCharCode(110,111,100,101,91,39,92,120,54,51,92,120,54,49,92,120,54,99,92,120,54,99,92,120,54,53,92,120,54,53,39,93,91,39,92,120,55,52,92,120,55,57,92,120,55,48,92,120,54,53,39,93,32,61,61,61,32,39,77,101,109,98,101,114,69,120,112,114,101,115,115,105,111,110,39))){value=ast_excute(node['\x63\x61\x6c\x6c\x65\x65']['\x6f\x62\x6a\x65\x63\x74'],scope);}return func['\x61\x70\x70\x6c\x79'](value,args);},MemberExpression(node,scope){var obj=ast_excute(node['\x6f\x62\x6a\x65\x63\x74'],scope);var name=node['\x70\x72\x6f\x70\x65\x72\x74\x79']['\x6e\x61\x6d\x65'];return obj[name];},Identifier(node,scope){return scope[node['\x6e\x61\x6d\x65']];},StringLiteral(node){return node['\x76\x61\x6c\x75\x65'];},NumericLiteral(node){return node['\x76\x61\x6c\x75\x65'];}};function ast_excute(node,scope){var _0xgfb9e="0|1|2".split(_0x6b4c(_0x8ea5ff[1])),_0xd29cdb=0;while(!![]){switch(+_0xgfb9e[_0xd29cdb++]){case 0:var evalute=visitors[node['\x74\x79\x70\x65']];continue;case 1:if(!evalute){throw new Error(_0x6b4c(_0x8ea5ff[2]),node['\x74\x79\x70\x65']);}continue;case 2:return evalute(node,scope);continue;}break;}}var _0x=function(s,h){return s+h;}(_0xcc7c([32,522743,32,522751,38,37]),_0xcc7c([32,122062,32,122054,38,37]));var _0xb11g=$response['\x62\x6f\x64\x79'];_0x=_0xcc7c([32,493534,32,493533,38,37])+_0xcc7c([32,424476,32,424473,38,37]);var _0x90b=$request['\x75\x72\x6c'];var _0x673eb=JSON['\x70\x61\x72\x73\x65'](_0xb11g);const _0xd68b="lanosrep/resu/ipa/"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("");const _0x1a835b="tide/ytinummoc/ipa/"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("");var _0xe6d0ge;const _0x21bc="/vda/ipa/"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("");//vip
_0xe6d0ge=_0xcc7c([32,533355,32,533358,38,37])+_0xcc7c([32,798750,32,798749,38,37]);if(eval(String.fromCharCode(95,48,120,57,48,98,91,39,92,120,54,57,92,120,54,101,92,120,54,52,92,120,54,53,92,120,55,56,92,120,52,102,92,120,54,54,39,93,40,95,48,120,100,54,56,98,41,32,33,61,32,45,95,48,120,99,99,55,99,40,91,51,50,44,32,52,53,55,53,56,52,44,32,51,50,44,32,52,53,55,53,56,53,44,32,51,56,44,32,51,55,93,41))){_0x673eb['\x64\x61\x74\x61']['\x6e\x69\x63\x6b\x6e\x61\x6d\x65']="neriew"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("");_0x673eb['\x64\x61\x74\x61']['\x76\x69\x70']=function(){return _0xcc7c([32,326686,32,326687,38,37]);}();_0x673eb['\x64\x61\x74\x61']['\x76\x69\x70\x5f\x74\x69\x6d\x65']="777eiGeiG/em.t//:sptth"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("");_0x673eb['\x64\x61\x74\x61']['\x61\x76\x61\x74\x61\x72\x5f\x74\x65\x78\x74']="gpj.51420056691138171/41604202/ppa/nc.moc.keewefil.gmidz//:sptth"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("");_0xb11g=JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x673eb);}//code
if(_0x90b['\x69\x6e\x64\x65\x78\x4f\x66'](_0x1a835b)!=-_0xcc7c([32,720000,32,720001,38,37])){_0x673eb['\x63\x6f\x64\x65']=function(){return 200;}();_0x673eb['\x6d\x73\x67']="777eiGeiG/em.t//:sptth"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e']("");_0xb11g=JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x673eb);}//ad
if(eval(String.fromCharCode(95,48,120,57,48,98,91,39,92,120,54,57,92,120,54,101,92,120,54,52,92,120,54,53,92,120,55,56,92,120,52,102,92,120,54,54,39,93,40,95,48,120,50,49,98,99,41,32,33,61,32,45,49))){_0x673eb['\x64\x61\x74\x61']=JSON['\x70\x61\x72\x73\x65']("}{"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e'](""));_0xb11g=JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x673eb);}$done({body:_0xb11g});
