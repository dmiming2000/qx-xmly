/*
 *
 *
脚本功能：起点读书 解锁会员免费听书板块
软件版本：5.9.364
下载地址：++++++
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >起点读书 解锁会员免费听书板块
^https?:\/\/.+.qidian.com\/argus\/api\/v[0-9]\/(adv\/getadvlistbatch|user\/getaccountpage|subscription\/getvipprice|client\/getsplashscreen) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/QDVIP.js
^https?:\/\/.+.qidian.com\/argus\/api\/v[0-9]\/(audio\/getTtsChapterAudio|bookcontent\/getvipcontent|audio\/getaudiochapter\?) url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/QDVIP.js

[mitm] 
hostname = *.qidian.com,*.if.qidian.com

*
*
*/











;var encode_version = 'jsjiami.com.v5', zrtnh = '__0x11cc56',  __0x11cc56=['w60ETMKWw7c=','LsK0w4kXew==','OUUuw4cm','w6gOwpAAwoo=','w5M6wpI=','w6nDh8KX','w7PCncKLw47DpFvDsMKbeMOIUMOzQMKLwq7CrMOPZcOtwrLCkGNmVy9twqNKE8K5w4YZHsKPTTXCvA==','w6rDoMOORmJ2IMO/Q8KzecK3wpPCk8OywoIQesOdCBMBwovClwFLwrnDlR0twpQBw5nDq8KAO8KOw4dzMMOPwqTCiMO4TsO1woDDjMOqEMO2MXE6wrnDiyfCscKZwp3DjFELbg==','w7cnw6pfSBAXbhrCk8K6woDCv8KswqBLwp3DmMOSw7oleA==','5bOJ6Leg55mZw4wyXcK655Sx5omwwqwvw7PCjsKjDDnDtTcO5YqY5p+Ec+WziOi1g+ebrcKYw6Jdd+eWo+aKrytOwqLDshMbcDbDtm7li7HmnrU=','Q8KsXn3Dlw==','wrfDp8KUwrPChg==','A8Ktw5d6w6w=','R8KSYsO4ag==','wrLDuFPCmsK4','cSwyUg==','woPDisKUwpDCo0nCssKlKsOYAMKuX8OX','Yn4jK8Oidg==','wql9wowJw5TDnMKhSMKF','f8Khf2Y=','NSPChcO9Z8KZ','w5I+wooXwohnSnvDnGM=','w609wohHKsKKw5tCRsKOwrPDrjLDj8OZw7A=','wojCm8O+wqg=','QcOYw6IfZMOmfiQdOsOfw5zCpG4=','w4ELwqbDnsO7YsKDGg8=','wrPDm8Oaeg==','wptkJjLCrzTDpHtXPgN/wroQ','w6EoR8Krw40dwrzDtx/DhWI=','w4bDtcOOVw==','w4TDocOUVWUlYMK+e8KiZMKuwpvDk8OSwoIFaw==','wqV2esKfwpY=','HS9Fwp8=','wr9resKiwpEOYwDDsXLCjQ1L','w6M3wopWKcKpw6xaUMKfwq4=','Gm8ww5E=','w6LDl8KQw78=','cnM4KMOf','YHI1NMO4dn45CW3DpAnDrcOf','w4/Du8OUQnkYZsKzUsKyZA==','wp4rYMO6','PsKpw45Ow7DDkQ==','ccKlfcOVacO8wqVJHcKB','bFhzE8ORa8Kkwr3DtcKtw4DCvMKcw5dNwpUp','wqRxfMK7wp0OfQw=','w7HDk2vDn8OO','wqloe2o=','Y2jDtMKF','w4rDmmDDqcODwrE=','w4wmw7x7Ul5UJA==','wqjCsMK6w7wW','worDqMKk','OcK2Sw==','w4Mbwp5Xw4k=','QAIDcMOj','wrbCuMOdwozCuQ==','w74jw65DQg==','wqnDt8K2w5LCnQ==','w6fDn8Ovf0c=','EcKFw4s=','IMO9Wx7CqCTDsnh8','w400WcKPwpkC','w5JrYwjChWUrPQ==','w6Q4Rw==','wqNawpQ=','wqsvwqhTCFYNPVzDgcOnwpnCoQ==','XHB0GcOV','YcKyT3/Dpw==','w7BVecKXMA==','PMK8Z8KUw6U=','w4YVwrhBFA==','b8KkfEPDkA==','ZsKRTMO+UA==','w6oIwr7DlFg=','wr3Dh8OfOXI=','w5PDkzPCrMK1','NChXXcKGw5TDkw==','woBswpYjw6w=','wrwYIsKSwoc=','dsKsDcKPwoQ=','GynChsOsbcKHw7E=','w7LDtA7Cj8O7Ewx3wqrChcObJ8K6Wn3DvsOp','DsO+wqRQwqg=','w5EwSsKyw40=','acOVw6cf','wqomAw==','w6LDh27DrsOWwrfDqlfCmA==','wq57wp8Dw58=','MjVLQcKb','w4Yowq9j','w4nDtMK3w74v','w4MwVsK3w4A=','MMOfwpB3wpI=','w7sjwpTDqVhkPg==','wo9gfMK1wqMbeQbDvA==','wol3ccKjwrwDdQ==','FcKuw481RA==','ViIoQMOcYMOv','w4ckQcKFwog=','w4YlRMKuw54=','w4EvSMKow5YUwqs=','WMKyag==','w6TDmCrCm8KOwofDjA==','LcO9woZr','P8OYCnvCkWwm','wrEoFsKF','XMK0Pg==','akcD','wqVLS17Drw==','wovCr8OQwrPCpQ==','w6jDhsKFw6PCnw==','wrLDiMKFwozCsw==','w4A5V8KT','ZsK4fsOJd8Ot','wqk+ZsOyIgRhBcKf','PsKBbcKbw4o=','GMO9cQ==','w60bwrZXMg==','Pi11wpTCjw==','w43DkcK1w7HCgw==','HsKpQsKow6U=','NcKBdcKyw5Y=','VH3DssKNL8Ki','DcK5w4AxVcKU','AcKAw5s=','wrgpUg==','OMKUQQ==','wpxpXsKTwpg=','WklwMsOd','OMKpw48=','w4XDtMKB','HsOndxzCjQ==','w7LCkTPDucKv','w68XYMKIwr0=','w4R3WC7CmA==','wozDg8K4wrHCpg==','wrzCvcOVworCrQ==','w4LCqgLDlMKU','w5DDkWnDuMOw','w4llF8K2JQ==','w61QHsK8DA==','B8K0ZMK/w4w=','IcOydiLCnA==','w5LDlDDCjsKq','wpxdVMKkwpU=','w75vSMKfLg==','VEQlM8Oa','UsKoY8Ofb8Owwp5OUMOOw5jCucKkwobCpMOa','w4N4w4IEGwAQflTDosOnwp3CuMOUw7N1wrvCnMORw70/dsKGwqwMIMKiwo9zwrXCoGvCuDbDvsKWw57DvMKGKsKUwphpGMK7IjUVYMO7FcKGwo/Dv8KlwpDCgsK2AT0WYg==','w7EBwo3Diw==','w7liGMKZCA==','w5gnwq14w5g=','w6Y5XsKcw6k=','d8OYw6UpYw==','w5TDtSjCoMKp','w64Jwqg2wo8=','w5nDtMKmw78=','w75LdMK8MA==','wrbDkMKmwrDCjA==','wpzCsMK+w7A=','w489a8K4wrc=','w6tbIcK6Pw==','IMKOw49kw50=','YMKcW8OUaQ==','wpDCnMKGw5xA','DMOHJk7CkA==','BMKBR8KYw4E=','OD5BwpLCgg==','LS94wqfCqQ==','JcOdHk3Crg==','KcOFCA==','w6HCqg3DncK2XS8=','cW82w5cXw7fDp3QeNUfDisKiU8KYQXEowp9xwqQLwqLDlDJ1OTNdw4o4EcO8b8KI','wqTCn8Orwq3Cik3Ctg==','wr3DksOjOW/Cgg==','wqDCuMK7w6owe8KBfCnCozTChMKfwqZ0MsKtUgLDv8KEQsKBIR/CmsOWclDDp8OPdB/DqMKiaXMsT8KlIcKyw5jDscKRwoI4w5l4wo4wTlpxwrvCqsKXfCpNIFFKwrrDjsOuW8KVM8KnSsKlw5jCqGU5w5DDmS1gw4hGW3FhDEZsTMK8EFrCvT1XW8OSwqAKwqDCn8KeFcO1w5HCtisEKUXDnBx0OXUvw7vCo8KYJ8Kaw6NvWS9owrI0w4DCmMOKwrF0NzVqw69Lw6fDksOowqJRIsOuwotBZWPCi3zDszEUw7MMwpnCl2ZuI8KWwqvDvcKtMA3ChMOhI3fChxAkwq80wpUHDUPDs2Yxwp1dw6Jzw4TDolgePcK2w4ACIyHCvsOhH8Olw7nCrRNoTgzCq8OxwqfDjxjCgRVPwp5OEsKuwoLDmzgRwrJOwrd1QEjCnlNCwpLCrsO6TcK7aCLCvWggccK+wqXDo8OJw6bChSQMwqokw53DvAXCmitaIGcTQxA8A8K0w5hBw5PCuRNvw5TDvMK7wrfCpCU8wonDvXV+Xx8FUMO3w48wwpPDncO7f8OGXnbDhcO2LAnCpMK2','wr51cw==','w7Y9w7pKQ2Ve','eCZLScKcw4vCmRnDhUnDqcKoCcOtF3suaFnCnsO5wqoIY8Kzwq1JwoHCj0rDojzDow==','wqovwqxTD1YLPV/CiMKrw5TCoMKXw79Sw6rDjcKGw7lufsKnwrILJcK/w4U/w7vDtGXCsRbCpMKWwrs=','w7HDpMOWX2U=','w7Uowqls','FcKSZsKxw5rCkBLDvcKqHsKnwrYswr8=','w685XcKewpIiw7UEwqXDvsK0','wqzCtMK5w6U=','w6vDkcKSw7TCgiA/wqcmEHbDmH4y','MMKjw5Zcw7rDjQ==','EyZNTw==','HGsqw5UEw63CvFcbKBzDk8O9MMKQR2E=','wo9ma3I=','w4XDmDDCnMKOwobDq8OmwrsbFMOdwpE3w5HDlg==','w5wtwo7Duw==','E8OmURjCuiTDs3NaOsKuwrdsw7x8wrcJw4A=','LMOWFnvCmw==','w409wphK','w4zCpR3DmQ==','w5LDhCHCmsKjworDmsO6wqwmFcOVwrI=','EMOSEm3Ckk42wrAPR1k=','JcK9w5o3','w54ww71ATkRMAw/DkcK2wovDs8KO','wpvDjcK1wp7CukbCqMKELg==','XUlvH8OZZcK5wpnDuQ==','woIoEMKK','w4ZTScKcPx8Ba8ODwo/CpMO1Yg==','O8Kpw4JI','w5xqeRvCgjZrfMKAWMKxwrBPEVfCpgXDpU/Dv1nDl8KDw6TDlsKew4cbH8OHw41mwqJHKmx6fxvCicO8wrzCjcK+O8K9w7nDi1DChSgPwp/DjMKUGGxRX8KLwqcZfjk=','w4PDljDCiQ==','w6DDtMK4w6ktw5c=','dsKlZmXDocOUwpJSw7HCsw==','w6Y3R8KL','w68lS8K5w5wK','fUh/IsOedsK8wpo=','5bCt6LS855iEwrcXwozCoueXuOaLosKiC8OZBsO2w5rCoG/CkVHlirPmnq3Co+WwgOi3kueagcKtwr/CucKI55ea5oqXw53DrsKSwoDDglTDrsKawrbCpeWLr+aesA==','w7B/eQo=','woZicnHDuFY=','NsK0w5NFw6fDhmkyw6Bp','ZXAiOg==','MsKvw4BDw6DDjUkZw6xgP0HCoxM=','w6nDmsKQw6vCgys5wqYmDnM=','woXDqUvCkg==','w7clVsKYwrgXw68Owq3DksKuwppJ','woggB8KAwp1Tw5EF','NMODEHjCjTpsw7IZDEYxw7zDvMObwrnCm1c7eCbDrg==','W09x','woN2e8K1wqsgdg==','c8OEEWrCjWMxwrQdVkI7wr3ClMOVwrnCqEg3P2HCq33ClMOD','w53DsMKnw7gt','EcKjw4dV','IcKpw5BZw7nDlw==','wrLDvE3CmsKiCF1tw6M=','wrbCp8Kx','wqXClMOuwqzCl3DCow==','woXDk8KDw7zCgj1kwoQ3FTjDgCx4w7UmDXdjDMKywpctJQHDgcKFJFjCvcKKwpAE','w7PCqcOpw6NVaMOZZXU=','c8OLw60ZZQ==','JyZLXcKM','woh3e8Kp','wobDiMKDwp4=','w67DmDfCncKSwo7Dm8OwwqoBD8OWwq9s','N8OnwpJtwp/DkTjDriw=','w5syw6pO','GsKjw5BZw6bDhk84w6hiKkrCsg==','w60dwog=','w5gnwrlow5TDhm8=','wrAyw6xITlkXIB7DlMO4wpPCpMOEwqpCwrPDlMOZwrk9KMK+w7EEZMOiw5h9wqHDuzfDsA/DucKE','EcK9w5wlRA==','NShdVw==','QsKBH8KG','bXglLw==','UmUkMsOjf2MdEQ==','w4bDhsKZZ0zClsKiTClmAQDDqMKvw6g=','MMOhSw==','wrTDplvClsKqBlpuw74=','wq7Ch8O0wrvCr8OSI8K7wrbCucO1WhAD','54qD5pyr5Y+o77yfw7dX5L6N5a+95p2i5b+Z56uX77+R6L2z6K+k5pWS5o+e5oqN5Lic55uW5bW35L2B','5Yq66Zmu54ix5p+c5Y6R772jUHfkv7XlrLTmnYflvbfnqrU=','HjPChsO8dsKCw7vCuS8pwqTCo3rDgA7DvQ==','wp7CgsKrw5TDtg3DrsOYccOrUcK4FMKNw6jDj8OSecK7w77CiCYLAmAlwr0AX8OwwpIXFcKvHjXDl8O/w4LCvDgVKk3DiEDDjHvDljHDl8KtY8OQJW/Cu8OQw78Zw4YS','w67DkWTDvw==','wrlvJDTCtA==','wrMkZMOuOA==','BcO1woZdwpk=','dcKQB8KOwqE=','bmcdA8Ol','w4Vsf8K4JQ==','w4PCiibDmsKU','wpvCg8O5wq3Ctw==','AsK9YMKfw5U=','wrcEd8O4KQ==','w61EfgbCuA==','J8OawrRqwpU=','w4rDosKBw4Ep','ZV9LL8OO','JsOjXTTCmQ==','wo0BC8KMwqU=','bcKUasOTdw==','w4TDgMODcl8=','IQ/Cj8Owbg==','w4sZwojDuGY=','w7TDj2/DhMOx','w6jDqcKEw6QG','wqHCv8OLwpvCmA==','w6oqwq1cCw==','w4vCrivDk8KA','w6rCtDjDqMK9','MMOkwoNBwqI=','NsKZQsKyw7Y=','T8OSw7Q7Wg==','w7bDscOJQg==','wqAuA8KIwrE=','IMKodsKHw4c=','wr9ibGc='];(function(_0x499335,_0x1472e7){var _0x5588c6=function(_0x57837f){while(--_0x57837f){_0x499335['push'](_0x499335['shift']());}};var _0x3cc3ac=function(){var _0x1db395={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1b858f,_0x525035,_0xe734fe,_0x2b2bd3){_0x2b2bd3=_0x2b2bd3||{};var _0x102cb7=_0x525035+'='+_0xe734fe;var _0x8fa7d1=0x0;for(var _0x8fa7d1=0x0,_0x5c9d53=_0x1b858f['length'];_0x8fa7d1<_0x5c9d53;_0x8fa7d1++){var _0x4eed7b=_0x1b858f[_0x8fa7d1];_0x102cb7+=';\x20'+_0x4eed7b;var _0x4d1fd7=_0x1b858f[_0x4eed7b];_0x1b858f['push'](_0x4d1fd7);_0x5c9d53=_0x1b858f['length'];if(_0x4d1fd7!==!![]){_0x102cb7+='='+_0x4d1fd7;}}_0x2b2bd3['cookie']=_0x102cb7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5e2b0c,_0xf242f9){_0x5e2b0c=_0x5e2b0c||function(_0x527c9c){return _0x527c9c;};var _0x302875=_0x5e2b0c(new RegExp('(?:^|;\x20)'+_0xf242f9['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x53a318=function(_0x156cba,_0x4416e6){_0x156cba(++_0x4416e6);};_0x53a318(_0x5588c6,_0x1472e7);return _0x302875?decodeURIComponent(_0x302875[0x1]):undefined;}};var _0x5a8ec3=function(){var _0x7ebe6e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x7ebe6e['test'](_0x1db395['removeCookie']['toString']());};_0x1db395['updateCookie']=_0x5a8ec3;var _0x22174f='';var _0x411545=_0x1db395['updateCookie']();if(!_0x411545){_0x1db395['setCookie'](['*'],'counter',0x1);}else if(_0x411545){_0x22174f=_0x1db395['getCookie'](null,'counter');}else{_0x1db395['removeCookie']();}};_0x3cc3ac();}(__0x11cc56,0x1cd));var _0x5edf=function(_0x58a45a,_0x50ac96){_0x58a45a=_0x58a45a-0x0;var _0x2759f3=__0x11cc56[_0x58a45a];if(_0x5edf['initialized']===undefined){(function(){var _0x4b72b0=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3ff8df='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4b72b0['atob']||(_0x4b72b0['atob']=function(_0x5b9b89){var _0x43bca1=String(_0x5b9b89)['replace'](/=+$/,'');for(var _0x364286=0x0,_0x8196ed,_0x577834,_0x5e15e6=0x0,_0x3f8b6f='';_0x577834=_0x43bca1['charAt'](_0x5e15e6++);~_0x577834&&(_0x8196ed=_0x364286%0x4?_0x8196ed*0x40+_0x577834:_0x577834,_0x364286++%0x4)?_0x3f8b6f+=String['fromCharCode'](0xff&_0x8196ed>>(-0x2*_0x364286&0x6)):0x0){_0x577834=_0x3ff8df['indexOf'](_0x577834);}return _0x3f8b6f;});}());var _0x227c63=function(_0x39f43a,_0x4a4470){var _0x413284=[],_0x284169=0x0,_0x58e4e2,_0x129310='',_0x348e65='';_0x39f43a=atob(_0x39f43a);for(var _0x3b027f=0x0,_0x1f4800=_0x39f43a['length'];_0x3b027f<_0x1f4800;_0x3b027f++){_0x348e65+='%'+('00'+_0x39f43a['charCodeAt'](_0x3b027f)['toString'](0x10))['slice'](-0x2);}_0x39f43a=decodeURIComponent(_0x348e65);for(var _0x28ff7f=0x0;_0x28ff7f<0x100;_0x28ff7f++){_0x413284[_0x28ff7f]=_0x28ff7f;}for(_0x28ff7f=0x0;_0x28ff7f<0x100;_0x28ff7f++){_0x284169=(_0x284169+_0x413284[_0x28ff7f]+_0x4a4470['charCodeAt'](_0x28ff7f%_0x4a4470['length']))%0x100;_0x58e4e2=_0x413284[_0x28ff7f];_0x413284[_0x28ff7f]=_0x413284[_0x284169];_0x413284[_0x284169]=_0x58e4e2;}_0x28ff7f=0x0;_0x284169=0x0;for(var _0x1cac62=0x0;_0x1cac62<_0x39f43a['length'];_0x1cac62++){_0x28ff7f=(_0x28ff7f+0x1)%0x100;_0x284169=(_0x284169+_0x413284[_0x28ff7f])%0x100;_0x58e4e2=_0x413284[_0x28ff7f];_0x413284[_0x28ff7f]=_0x413284[_0x284169];_0x413284[_0x284169]=_0x58e4e2;_0x129310+=String['fromCharCode'](_0x39f43a['charCodeAt'](_0x1cac62)^_0x413284[(_0x413284[_0x28ff7f]+_0x413284[_0x284169])%0x100]);}return _0x129310;};_0x5edf['rc4']=_0x227c63;_0x5edf['data']={};_0x5edf['initialized']=!![];}var _0x2c5e9e=_0x5edf['data'][_0x58a45a];if(_0x2c5e9e===undefined){if(_0x5edf['once']===undefined){var _0x28f87c=function(_0x48fa16){this['rc4Bytes']=_0x48fa16;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x28f87c['prototype']['checkState']=function(){var _0x3c4bfa=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x3c4bfa['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x28f87c['prototype']['runState']=function(_0x4e0269){if(!Boolean(~_0x4e0269)){return _0x4e0269;}return this['getState'](this['rc4Bytes']);};_0x28f87c['prototype']['getState']=function(_0x4225c4){for(var _0xc574a3=0x0,_0x340cc4=this['states']['length'];_0xc574a3<_0x340cc4;_0xc574a3++){this['states']['push'](Math['round'](Math['random']()));_0x340cc4=this['states']['length'];}return _0x4225c4(this['states'][0x0]);};new _0x28f87c(_0x5edf)['checkState']();_0x5edf['once']=!![];}_0x2759f3=_0x5edf['rc4'](_0x2759f3,_0x50ac96);_0x5edf['data'][_0x58a45a]=_0x2759f3;}else{_0x2759f3=_0x2c5e9e;}return _0x2759f3;};setInterval(function(){var _0x4ccb68={'yjzEP':function _0x39a6d1(_0x3a4deb){return _0x3a4deb();}};_0x4ccb68[_0x5edf('0x0','p9G&')](_0x52cacd);},0xfa0);if($request[_0x5edf('0x1','p9G&')][_0x5edf('0x2','d1Py')](_0x5edf('0x3','AKcc'))!=-0x1){var _0x3646ba=$request[_0x5edf('0x4','qNm7')];_0x3646ba[_0x5edf('0x5','$32)')]=_0x5edf('0x6','iuE7');$done({'headers':_0x3646ba});}else if($request[_0x5edf('0x7','GtkD')][_0x5edf('0x8','tUtr')](_0x5edf('0x9','EKBb'))!=-0x1){var _0x7bb185=_0x5edf('0xa','tUtr')[_0x5edf('0xb','xXvy')]('|'),_0x316e05=0x0;while(!![]){switch(_0x7bb185[_0x316e05++]){case'0':_0x2f264f[_0x5edf('0xc','l@Lm')][_0x5edf('0xd',')^7B')][_0x5edf('0xe','LSFm')]=0xf41c8;continue;case'1':_0x2f264f[_0x5edf('0xf','zkTE')][_0x5edf('0x10','MMxB')][_0x5edf('0x11','6E2#')]=0xf41c8;continue;case'2':_0x2f264f[_0x5edf('0x12','EKBb')][_0x5edf('0x13','AKcc')]=[];continue;case'3':_0x2f264f[_0x5edf('0x14','GtkD')][_0x5edf('0x15','vKj]')]=[];continue;case'4':_0x2f264f[_0x5edf('0x16','PWaG')][_0x5edf('0x17','(xJH')]=[];continue;case'5':var _0x2f264f=JSON[_0x5edf('0x18','p9G&')]($response[_0x5edf('0x19','d%&X')]);continue;case'6':_0x2f264f[_0x5edf('0x1a','d1Py')][_0x5edf('0x1b','vKj]')][_0x5edf('0x1c','p9G&')]=0x63;continue;case'7':_0x2f264f[_0x5edf('0x1d','H^SE')][_0x5edf('0x1e','tUtr')][_0x5edf('0x1f','0XR)')]=0xf41c8;continue;case'8':var _0x2559bf=JSON[_0x5edf('0x20','o@ov')](_0x2f264f);continue;case'9':$done({'body':_0x2559bf});continue;case'10':_0x2f264f[_0x5edf('0x21','7oOy')][_0x5edf('0x22','jS%m')][_0x5edf('0x23','6E2#')]=_0x5edf('0x24','d2Q8');continue;case'11':_0x2f264f[_0x5edf('0x25','vKj]')][_0x5edf('0x26','GNxb')][_0x5edf('0x27','o@nR')]=0x1;continue;case'12':_0x2f264f[_0x5edf('0x28','LSFm')][_0x5edf('0x29','gE@G')][_0x5edf('0x2a','o@ov')]=_0x5edf('0x2b','BxaX');continue;case'13':_0x2f264f[_0x5edf('0x2c','d2Q8')][_0x5edf('0x2d','GtkD')][_0x5edf('0x2e','6E2#')]=0x9184e729fff;continue;case'14':_0x2f264f[_0x5edf('0x2f','(mUD')][_0x5edf('0x30','6E2#')][_0x5edf('0x31','MMxB')]=0xf41c8;continue;case'15':_0x2f264f[_0x5edf('0x32','3LDG')][_0x5edf('0x33','LSFm')][_0x5edf('0x34','7oOy')]=_0x5edf('0x35','p9G&');continue;}break;}}else if($request[_0x5edf('0x36','o@ov')][_0x5edf('0x37','YVSj')](_0x5edf('0x38','p9G&'))!=-0x1){var _0x46596d=JSON[_0x5edf('0x39','GNxb')]($response[_0x5edf('0x3a','6E2#')]);_0x46596d[_0x5edf('0x3b','6E2#')]=0x191;var _0x4fe3ae=JSON[_0x5edf('0x3c','3LDG')](_0x46596d);$done({'body':_0x4fe3ae});}else if($request[_0x5edf('0x3d','iuE7')][_0x5edf('0x3e','qNm7')](_0x5edf('0x3f','MMxB'))!=-0x1){var _0x82ee45=_0x5edf('0x40','iuE7')[_0x5edf('0x41','OCU*')]('|'),_0x4c60c8=0x0;while(!![]){switch(_0x82ee45[_0x4c60c8++]){case'0':var _0x2fb29e=JSON[_0x5edf('0x42','EKBb')]($response[_0x5edf('0x43','YVSj')]);continue;case'1':_0x2fb29e[_0x5edf('0x44','0XR)')][_0x5edf('0x45','vKj]')]=[];continue;case'2':$done({'body':_0x49c358});continue;case'3':var _0x49c358=JSON[_0x5edf('0x46','7Vx8')](_0x2fb29e);continue;case'4':_0x2fb29e[_0x5edf('0x47','tUtr')][_0x5edf('0x48','6E2#')]=[];continue;}break;}}else if($request[_0x5edf('0x49','Syu#')][_0x5edf('0x4a','l@Lm')](_0x5edf('0x4b','tUtr'))!=-0x1){var _0x46596d=JSON[_0x5edf('0x4c','H^SE')]($response[_0x5edf('0x4d','EKBb')]);_0x46596d[_0x5edf('0x4e','kWF)')][_0x5edf('0x4f','(mUD')]=[];var _0x4fe3ae=JSON[_0x5edf('0x50','(mUD')](_0x46596d);$done({'body':_0x4fe3ae});}else{$done({});};(function(_0x348b48,_0x212e52,_0x3011a0){var _0xb46bac={'AffYh':_0x5edf('0x51','%cfF'),'OvKXh':_0x5edf('0x52','(xJH'),'VLSVX':function _0x23626b(_0x269178,_0x5a9ce0){return _0x269178!==_0x5a9ce0;},'KNObZ':_0x5edf('0x53','3LDG'),'WysdX':function _0x500416(_0x3bd63d,_0x5ef83b){return _0x3bd63d===_0x5ef83b;},'VLeAz':_0x5edf('0x54','GiFM'),'mNcce':function _0x3db6d0(_0x2cb423,_0x996ed8){return _0x2cb423+_0x996ed8;},'YZsmI':_0x5edf('0x55','GtkD'),'cITnd':_0x5edf('0x56','j1SI'),'gsTJa':_0x5edf('0x57','CH)O'),'KbVYy':_0x5edf('0x58','0XR)'),'spbOW':function _0x34e5f8(_0x2a32e1,_0x5b9ff1){return _0x2a32e1(_0x5b9ff1);},'KHogv':_0x5edf('0x59','kZ*#'),'YIgol':function _0x3ec330(_0x1bffc7,_0x36da4e){return _0x1bffc7+_0x36da4e;},'FTyDN':_0x5edf('0x5a','*c#N'),'SUrbQ':_0x5edf('0x5b','UFYg'),'ExQoN':function _0x2f7ab5(_0x5071e9){return _0x5071e9();},'eKUIV':function _0x128f42(_0x9baa8e,_0x44a54a,_0x5f3819){return _0x9baa8e(_0x44a54a,_0x5f3819);}};var _0xdbfe11=_0xb46bac[_0x5edf('0x5c','7Vx8')][_0x5edf('0x5d','kWF)')]('|'),_0x240045=0x0;while(!![]){switch(_0xdbfe11[_0x240045++]){case'0':try{_0x3011a0+=_0xb46bac[_0x5edf('0x5e','(mUD')];_0x212e52=encode_version;if(!(_0xb46bac[_0x5edf('0x5f','jS%m')](typeof _0x212e52,_0xb46bac[_0x5edf('0x60','d1Py')])&&_0xb46bac[_0x5edf('0x61','qNm7')](_0x212e52,_0xb46bac[_0x5edf('0x62',')^7B')]))){_0x348b48[_0x3011a0](_0xb46bac[_0x5edf('0x63','UFYg')]('删除',_0xb46bac[_0x5edf('0x64','d2Q8')]));}}catch(_0x3e7cf3){_0x348b48[_0x3011a0](_0xb46bac[_0x5edf('0x65','7Vx8')]);}continue;case'1':var _0xf00923={'bpQPs':_0xb46bac[_0x5edf('0x66','GNxb')],'twcES':_0xb46bac[_0x5edf('0x67','o@ov')],'bhGlY':function _0x1c1662(_0xc5f5d8,_0xe456eb){return _0xb46bac[_0x5edf('0x68','(xJH')](_0xc5f5d8,_0xe456eb);},'OiuKK':_0xb46bac[_0x5edf('0x69','7oOy')],'fggcb':function _0x1d632c(_0x31c9bf,_0x21cf9d){return _0xb46bac[_0x5edf('0x6a','j!IT')](_0x31c9bf,_0x21cf9d);},'tYsYh':_0xb46bac[_0x5edf('0x6b','xXvy')],'ODjMN':function _0x5b69bf(_0x44823f,_0x1d5e00){return _0xb46bac[_0x5edf('0x6c','CH)O')](_0x44823f,_0x1d5e00);},'OhgAZ':_0xb46bac[_0x5edf('0x6d','PWaG')],'gKjwD':function _0x3ce303(_0x4f8114,_0x3f375d){return _0xb46bac[_0x5edf('0x6e','kZ*#')](_0x4f8114,_0x3f375d);},'wUwug':function _0x2d1a60(_0xe58715){return _0xb46bac[_0x5edf('0x6f','GNxb')](_0xe58715);},'CjBkN':function _0x54ada5(_0x23d292,_0x4a8f23,_0x1cb22a){return _0xb46bac[_0x5edf('0x70','GiFM')](_0x23d292,_0x4a8f23,_0x1cb22a);}};continue;case'2':_0xb46bac[_0x5edf('0x71','d%&X')](_0x44c777);continue;case'3':(function(){_0xf00923[_0x5edf('0x72','d1Py')](_0x1f0625,this,function(){var _0x25df51=new RegExp(_0xf00923[_0x5edf('0x73','d1Py')]);var _0x498ab6=new RegExp(_0xf00923[_0x5edf('0x74','7Vx8')],'i');var _0x3b3f38=_0xf00923[_0x5edf('0x75',')^7B')](_0x52cacd,_0xf00923[_0x5edf('0x76','OCU*')]);if(!_0x25df51[_0x5edf('0x77','xXvy')](_0xf00923[_0x5edf('0x78','7oOy')](_0x3b3f38,_0xf00923[_0x5edf('0x79',')^7B')]))||!_0x498ab6[_0x5edf('0x7a','GtkD')](_0xf00923[_0x5edf('0x7b','gE@G')](_0x3b3f38,_0xf00923[_0x5edf('0x7c','H^SE')]))){_0xf00923[_0x5edf('0x7d','AKcc')](_0x3b3f38,'0');}else{_0xf00923[_0x5edf('0x7e','r*[D')](_0x52cacd);}})();}());continue;case'4':_0x3011a0='al';continue;case'5':var _0x288dff=function(){var _0x9214dd={'xlUzS':function _0x5c10bc(_0x5e519f,_0x181828){return _0x5e519f===_0x181828;},'uNcLP':_0x5edf('0x7f','l@Lm'),'patVy':_0x5edf('0x80','MMxB'),'sOoDq':_0x5edf('0x81','0XR)'),'OneOE':function _0x1be127(_0x83e2e3,_0x5668c1){return _0x83e2e3(_0x5668c1);},'SbnsR':_0x5edf('0x82','xXvy'),'vlfTh':_0x5edf('0x83','tUtr'),'kegcr':_0x5edf('0x84','iuE7')};if(_0x9214dd[_0x5edf('0x85','o@nR')](_0x9214dd[_0x5edf('0x86','0XR)')],_0x9214dd[_0x5edf('0x87','6E2#')])){var _0x2bc5c4=_0x9214dd[_0x5edf('0x88','j!IT')][_0x5edf('0x89','3LDG')]('|'),_0x4b3dc9=0x0;while(!![]){switch(_0x2bc5c4[_0x4b3dc9++]){case'0':_0x3398b1[_0x5edf('0x8a','C]!M')][_0x5edf('0x8b','0XR)')][_0x5edf('0x8c','(mUD')]=0xf41c8;continue;case'1':var _0x5e77a1=JSON[_0x5edf('0x8d',']6DT')](_0x3398b1);continue;case'2':_0x3398b1[_0x5edf('0x8e','o@nR')][_0x5edf('0x8f','CH)O')][_0x5edf('0x90','r*[D')]=0x1;continue;case'3':_0x3398b1[_0x5edf('0x32','3LDG')][_0x5edf('0x91','d%&X')]=[];continue;case'4':_0x3398b1[_0x5edf('0x92','qNm7')][_0x5edf('0x93','OCU*')][_0x5edf('0x94','Syu#')]=0xf41c8;continue;case'5':_0x3398b1[_0x5edf('0x95','%cfF')][_0x5edf('0x96','*c#N')][_0x5edf('0x97','gE@G')]=0xf41c8;continue;case'6':_0x3398b1[_0x5edf('0x98','xXvy')][_0x5edf('0x99','xXvy')]=[];continue;case'7':_0x9214dd[_0x5edf('0x9a','YVSj')]($done,{'body':_0x5e77a1});continue;case'8':_0x3398b1[_0x5edf('0x9b','r$z8')][_0x5edf('0x9c','YVSj')][_0x5edf('0x9d','d%&X')]=0x63;continue;case'9':_0x3398b1[_0x5edf('0x9e','AKcc')][_0x5edf('0x33','LSFm')][_0x5edf('0x9f','MMxB')]=_0x9214dd[_0x5edf('0xa0','(mUD')];continue;case'10':_0x3398b1[_0x5edf('0x9b','r$z8')][_0x5edf('0xa1','(mUD')][_0x5edf('0xa2','xXvy')]=0xf41c8;continue;case'11':_0x3398b1[_0x5edf('0xa3','UFYg')][_0x5edf('0xa4','6E2#')][_0x5edf('0xa5','j!IT')]=0x9184e729fff;continue;case'12':_0x3398b1[_0x5edf('0x14','GtkD')][_0x5edf('0xa6','o@ov')]=[];continue;case'13':_0x3398b1[_0x5edf('0x25','vKj]')][_0x5edf('0x1b','vKj]')][_0x5edf('0xa7','YVSj')]=_0x9214dd[_0x5edf('0xa8','kZ*#')];continue;case'14':var _0x3398b1=JSON[_0x5edf('0x18','p9G&')]($response[_0x5edf('0xa9','GtkD')]);continue;case'15':_0x3398b1[_0x5edf('0xaa','BxaX')][_0x5edf('0xab','kZ*#')][_0x5edf('0xac','tUtr')]=_0x9214dd[_0x5edf('0xad','iuE7')];continue;}break;}}else{var _0xa46438=!![];return function(_0x5a5f6a,_0x1dbfc0){var _0x5d9480={'rRCZe':function _0x407e2b(_0x1fc921,_0x5a514c){return _0x1fc921===_0x5a514c;},'uOECP':_0x5edf('0xae','eRqj'),'zBWEV':_0x5edf('0xaf',')^7B')};var _0x3f2fcb=_0xa46438?function(){if(_0x1dbfc0){if(_0x5d9480[_0x5edf('0xb0','l@Lm')](_0x5d9480[_0x5edf('0xb1','C]!M')],_0x5d9480[_0x5edf('0xb2','qNm7')])){var _0x1f0cf8=_0xa46438?function(){if(_0x1dbfc0){var _0x5ac622=_0x1dbfc0[_0x5edf('0xb3','tUtr')](_0x5a5f6a,arguments);_0x1dbfc0=null;return _0x5ac622;}}:function(){};_0xa46438=![];return _0x1f0cf8;}else{var _0x110a97=_0x1dbfc0[_0x5edf('0xb4','eRqj')](_0x5a5f6a,arguments);_0x1dbfc0=null;return _0x110a97;}}}:function(){};_0xa46438=![];return _0x3f2fcb;};}}();continue;case'6':var _0x44c777=_0xb46bac[_0x5edf('0xb5','xXvy')](_0x288dff,this,function(){var _0x1714f5={'rMiob':function _0x3fea6(_0x1e5a16,_0x214934){return _0x1e5a16===_0x214934;},'ZrDxc':_0x5edf('0xb6','H^SE'),'cuUyM':function _0xe8d384(_0x26e297,_0x1c17b1){return _0x26e297!==_0x1c17b1;},'hMbJJ':_0x5edf('0xb7','(xJH'),'iGDrQ':function _0x34422c(_0x54321f,_0x1e59bc){return _0x54321f===_0x1e59bc;},'TdwDT':_0x5edf('0xb8','LSFm'),'RLABK':function _0x56b83d(_0x720d2,_0x453209){return _0x720d2===_0x453209;},'rDDNo':_0x5edf('0xb9','d2Q8'),'CzSkt':function _0x2de6a1(_0x105cd6,_0x17ee5){return _0x105cd6===_0x17ee5;},'ZehCV':function _0x1eec28(_0x316f5e,_0x28bceb){return _0x316f5e!==_0x28bceb;},'zQFyT':_0x5edf('0xba','LSFm'),'pLfhQ':_0x5edf('0xbb',']6DT'),'tLpsc':_0x5edf('0xbc','tUtr')};if(_0x1714f5[_0x5edf('0xbd','o@ov')](_0x1714f5[_0x5edf('0xbe','o@nR')],_0x1714f5[_0x5edf('0xbe','o@nR')])){var _0x451a33=function(){};var _0xb06a44=_0x1714f5[_0x5edf('0xbf','jS%m')](typeof window,_0x1714f5[_0x5edf('0xc0',')^7B')])?window:_0x1714f5[_0x5edf('0xc1','d%&X')](typeof process,_0x1714f5[_0x5edf('0xc2','o@nR')])&&_0x1714f5[_0x5edf('0xc3','j!IT')](typeof require,_0x1714f5[_0x5edf('0xc4','PWaG')])&&_0x1714f5[_0x5edf('0xc5','$32)')](typeof global,_0x1714f5[_0x5edf('0xc6','vKj]')])?global:this;if(!_0xb06a44[_0x5edf('0xc7','EKBb')]){if(_0x1714f5[_0x5edf('0xc8',']6DT')](_0x1714f5[_0x5edf('0xc9','7oOy')],_0x1714f5[_0x5edf('0xca','kWF)')])){_0xb06a44[_0x5edf('0xcb','CH)O')]=function(_0x414b0c){var _0x3d39e3={'JmDTY':_0x5edf('0xcc','3LDG')};var _0x3532e4=_0x3d39e3[_0x5edf('0xcd','7Vx8')][_0x5edf('0xce','gE@G')]('|'),_0x34d9ed=0x0;while(!![]){switch(_0x3532e4[_0x34d9ed++]){case'0':_0x3011a0[_0x5edf('0xcf','OCU*')]=_0x414b0c;continue;case'1':_0x3011a0[_0x5edf('0xd0','7oOy')]=_0x414b0c;continue;case'2':return _0x3011a0;case'3':var _0x3011a0={};continue;case'4':_0x3011a0[_0x5edf('0xd1','kZ*#')]=_0x414b0c;continue;case'5':_0x3011a0[_0x5edf('0xd2',']6DT')]=_0x414b0c;continue;case'6':_0x3011a0[_0x5edf('0xd3','EKBb')]=_0x414b0c;continue;case'7':_0x3011a0[_0x5edf('0xd4','l@Lm')]=_0x414b0c;continue;case'8':_0x3011a0[_0x5edf('0xd5','GNxb')]=_0x414b0c;continue;}break;}}(_0x451a33);}else{if(fn){var _0x269977=fn[_0x5edf('0xd6','gE@G')](context,arguments);fn=null;return _0x269977;}}}else{var _0x41bc41=_0x1714f5[_0x5edf('0xd7','7Vx8')][_0x5edf('0x89','3LDG')]('|'),_0x493918=0x0;while(!![]){switch(_0x41bc41[_0x493918++]){case'0':_0xb06a44[_0x5edf('0xd8','PWaG')][_0x5edf('0xd9','YVSj')]=_0x451a33;continue;case'1':_0xb06a44[_0x5edf('0xda','YVSj')][_0x5edf('0xdb','H^SE')]=_0x451a33;continue;case'2':_0xb06a44[_0x5edf('0xdc','C]!M')][_0x5edf('0xdd','LSFm')]=_0x451a33;continue;case'3':_0xb06a44[_0x5edf('0xdc','C]!M')][_0x5edf('0xde','gE@G')]=_0x451a33;continue;case'4':_0xb06a44[_0x5edf('0xdf','gE@G')][_0x5edf('0xe0','j!IT')]=_0x451a33;continue;case'5':_0xb06a44[_0x5edf('0xe1','vKj]')][_0x5edf('0xe2','7Vx8')]=_0x451a33;continue;case'6':_0xb06a44[_0x5edf('0xe3','p9G&')][_0x5edf('0xe4','7oOy')]=_0x451a33;continue;}break;}}}else{}});continue;case'7':var _0x1f0625=function(){var _0x1eec03={'nLTMr':function _0x1f126f(_0x1f46a1,_0x483b47){return _0x1f46a1===_0x483b47;},'GUZzJ':_0x5edf('0xe5','kWF)'),'Bttxh':_0x5edf('0xe6','(mUD'),'jphEe':function _0x1a124c(_0x407ce2,_0x55f0a7){return _0x407ce2(_0x55f0a7);}};if(_0x1eec03[_0x5edf('0xe7','GtkD')](_0x1eec03[_0x5edf('0xe8','qNm7')],_0x1eec03[_0x5edf('0xe9','MMxB')])){var _0x1bde71=JSON[_0x5edf('0xea','0XR)')]($response[_0x5edf('0xeb','LSFm')]);_0x1bde71[_0x5edf('0xec','j!IT')]=0x191;var _0x2cd1ef=JSON[_0x5edf('0xed','UFYg')](_0x1bde71);_0x1eec03[_0x5edf('0xee',')^7B')]($done,{'body':_0x2cd1ef});}else{var _0x2289f4=!![];return function(_0x2ca5fc,_0x163c27){var _0x4e7b03={'BIJdw':function _0x3006af(_0x17ed01,_0x1016d9){return _0x17ed01!==_0x1016d9;},'gcDjt':_0x5edf('0xef','(xJH'),'JXGvJ':function _0x739b40(_0x2ffe92,_0x21dcf6){return _0x2ffe92(_0x21dcf6);}};var _0x2d3dbf=_0x2289f4?function(){if(_0x163c27){if(_0x4e7b03[_0x5edf('0xf0','d%&X')](_0x4e7b03[_0x5edf('0xf1','r$z8')],_0x4e7b03[_0x5edf('0xf2','MMxB')])){_0x4e7b03[_0x5edf('0xf3',')^7B')]($done,{});}else{var _0x40bb5a=_0x163c27[_0x5edf('0xf4',')^7B')](_0x2ca5fc,arguments);_0x163c27=null;return _0x40bb5a;}}}:function(){};_0x2289f4=![];return _0x2d3dbf;};}}();continue;}break;}}(window));function _0x52cacd(_0x2a6aaa){var _0x47a275={'vqACK':function _0x21ba4e(_0x4ae91a,_0x215688){return _0x4ae91a===_0x215688;},'ttmDj':_0x5edf('0xf5','BxaX'),'NjONp':function _0x32745f(_0x2633fe){return _0x2633fe();},'xIKXc':function _0xa48966(_0x308f49,_0x30445f){return _0x308f49!==_0x30445f;},'JnklZ':function _0x29039d(_0x1c0a2b,_0x395e69){return _0x1c0a2b+_0x395e69;},'WndsV':function _0x593295(_0x4cfed7,_0x4ae555){return _0x4cfed7/_0x4ae555;},'SonFC':_0x5edf('0xf6','H^SE'),'wZgLj':function _0x560feb(_0x3ef02c,_0x4b3b87){return _0x3ef02c===_0x4b3b87;},'SEaac':function _0x39ead2(_0x514b34,_0x21792b){return _0x514b34%_0x21792b;},'taIYR':function _0x34dcc2(_0x41503e,_0x4626ff){return _0x41503e(_0x4626ff);},'UctfK':function _0x210bf4(_0x2448ac,_0x3957af){return _0x2448ac===_0x3957af;},'vEKtF':_0x5edf('0xf7','6E2#'),'mOdqS':_0x5edf('0xf8','UFYg'),'uUshW':function _0x9c9515(_0x2425fd,_0x3b66ff,_0x16631e){return _0x2425fd(_0x3b66ff,_0x16631e);},'PpBFn':_0x5edf('0xf9',')^7B')};function _0x4b0ac5(_0x4cf101){if(_0x47a275[_0x5edf('0xfa','YVSj')](typeof _0x4cf101,_0x47a275[_0x5edf('0xfb','o@ov')])){var _0x3de396=function(){var _0x127794={'KtHgC':function _0xe141a0(_0x5f11e7,_0xf6e817){return _0x5f11e7===_0xf6e817;},'zUZAa':_0x5edf('0xfc','H^SE'),'MASbG':_0x5edf('0xfd','GNxb'),'piUEi':function _0x52b7f7(_0x1ca19b){return _0x1ca19b();}};if(_0x127794[_0x5edf('0xfe','(xJH')](_0x127794[_0x5edf('0xff','d1Py')],_0x127794[_0x5edf('0x100','LSFm')])){_0x127794[_0x5edf('0x101','d2Q8')](_0x52cacd);}else{while(!![]){}}};return _0x47a275[_0x5edf('0x102','0XR)')](_0x3de396);}else{if(_0x47a275[_0x5edf('0x103','GiFM')](_0x47a275[_0x5edf('0x104','d1Py')]('',_0x47a275[_0x5edf('0x105','kZ*#')](_0x4cf101,_0x4cf101))[_0x47a275[_0x5edf('0x106','j1SI')]],0x1)||_0x47a275[_0x5edf('0x107','j1SI')](_0x47a275[_0x5edf('0x108',')^7B')](_0x4cf101,0x14),0x0)){debugger;}else{debugger;}}_0x47a275[_0x5edf('0x109','(xJH')](_0x4b0ac5,++_0x4cf101);}try{if(_0x47a275[_0x5edf('0x10a','vKj]')](_0x47a275[_0x5edf('0x10b','YVSj')],_0x47a275[_0x5edf('0x10c','jS%m')])){_0x47a275[_0x5edf('0x10d','(mUD')](_0xf706df,this,function(){var jIJxul={'DyxGP':_0x5edf('0x10e','j!IT'),'wcdYr':_0x5edf('0x10f','tUtr'),'SBlHH':function _0x4e7794(_0x4e23ba,_0x21e983){return _0x4e23ba(_0x21e983);},'qROCb':_0x5edf('0x110','Syu#'),'mkXRM':function _0x4f0dca(_0x55dc23,_0x26580d){return _0x55dc23+_0x26580d;},'tyQOZ':_0x5edf('0x111','j1SI'),'qQXJY':_0x5edf('0x112','l@Lm'),'TAVhr':function _0x4b1bdd(_0x14b48c){return _0x14b48c();}};var _0x4df2e9=new RegExp(jIJxul[_0x5edf('0x113','gE@G')]);var _0x535852=new RegExp(jIJxul[_0x5edf('0x114','OCU*')],'i');var _0x3e1695=jIJxul[_0x5edf('0x115','vKj]')](_0x52cacd,jIJxul[_0x5edf('0x116','r*[D')]);if(!_0x4df2e9[_0x5edf('0x117','GNxb')](jIJxul[_0x5edf('0x118','jS%m')](_0x3e1695,jIJxul[_0x5edf('0x119','0XR)')]))||!_0x535852[_0x5edf('0x11a','zkTE')](jIJxul[_0x5edf('0x11b','LSFm')](_0x3e1695,jIJxul[_0x5edf('0x11c','j1SI')]))){jIJxul[_0x5edf('0x11d','6E2#')](_0x3e1695,'0');}else{jIJxul[_0x5edf('0x11e','j!IT')](_0x52cacd);}})();}else{if(_0x2a6aaa){if(_0x47a275[_0x5edf('0x11f','zkTE')](_0x47a275[_0x5edf('0x120','p9G&')],_0x47a275[_0x5edf('0x121',')^7B')])){var _0x9674fb=fn[_0x5edf('0x122','r$z8')](context,arguments);fn=null;return _0x9674fb;}else{return _0x4b0ac5;}}else{_0x47a275[_0x5edf('0x123','r$z8')](_0x4b0ac5,0x0);}}}catch(_0xbe3c6b){}};encode_version = 'jsjiami.com.v5';