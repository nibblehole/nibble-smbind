function passwordMD5(e,t){document.getElementById(e).value.length>0?document.getElementById(t).value=md5(document.getElementById(e).value):document.getElementById(t).value="#"}function passwordChanged(e,t){var n=document.getElementById("pwmeter"),d=new RegExp(/^(?=.{10,})(?=.*[A-Z].*[A-Z])(?=.*[a-z])(?=.*[0-9].*[0-9])(?=.*\W).*$/g),a=new RegExp(/^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).*$/g),o=new RegExp(/^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/g),l=new RegExp(/(?=.{4,}).*/g),i=document.getElementById(e),c=document.getElementById(t);0==i.value.length?(n.className="nok",c.disabled=!0):0==l.test(i.value)?(n.className="bad",c.disabled=!0):d.test(i.value)?(n.className="perfect",c.disabled=!1):a.test(i.value)?(n.className="enough",c.disabled=!1):o.test(i.value)?(n.className="almost",c.disabled=!0):(n.className="notenough",c.disabled=!0),n.setAttribute("tag",document.getElementById(n.className).value),n.setAttribute("title",document.getElementById(n.className).value),document.getElementById("pwc").innerHTML=document.getElementById(n.className).value}var link=document.createElement("link");link.type="image/png",link.rel="shortcut icon",link.href="data:image/png;base64,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",document.getElementsByTagName("head")[0].appendChild(link);var actual=document.URL,previous="";actual.search("/record.php")>0||actual.search("/newzone.php")>0?previous="zonelist.php":actual.search("/slave_record.php")>0||actual.search("/slave_newzone.php")>0?previous="slave_zonelist.php":actual.search("/upload.php")>0||actual.search("/chpass.php")>0||actual.search("/options.php")>0?previous="../":actual.search("/convert.php")>0?previous="upload.php":(actual.search("/user.php")>0||actual.search("/newuser.php")>0)&&(previous="userlist.php");var md5=function(e){function t(e,t){return e<<t|e>>>32-t}function n(e,t){var n,d,a,o,l;return a=2147483648&e,o=2147483648&t,n=1073741824&e,d=1073741824&t,l=(1073741823&e)+(1073741823&t),n&d?2147483648^l^a^o:n|d?1073741824&l?3221225472^l^a^o:1073741824^l^a^o:l^a^o}function d(e,t,n){return e&t|~e&n}function a(e,t,n){return e&n|t&~n}function o(e,t,n){return e^t^n}function l(e,t,n){return t^(e|~n)}function i(e,a,o,l,i,c,u){return e=n(e,n(n(d(a,o,l),i),u)),n(t(e,c),a)}function c(e,d,o,l,i,c,u){return e=n(e,n(n(a(d,o,l),i),u)),n(t(e,c),d)}function u(e,d,a,l,i,c,u){return e=n(e,n(n(o(d,a,l),i),u)),n(t(e,c),d)}function s(e,d,a,o,i,c,u){return e=n(e,n(n(l(d,a,o),i),u)),n(t(e,c),d)}function m(e){for(var t,n=e.length,d=n+8,a=(d-d%64)/64,o=16*(a+1),l=Array(o-1),i=0,c=0;n>c;)t=(c-c%4)/4,i=c%4*8,l[t]=l[t]|e.charCodeAt(c)<<i,c++;return t=(c-c%4)/4,i=c%4*8,l[t]=l[t]|128<<i,l[o-2]=n<<3,l[o-1]=n>>>29,l}function r(e){var t,n,d="",a="";for(n=0;3>=n;n++)t=e>>>8*n&255,a="0"+t.toString(16),d+=a.substr(a.length-2,2);return d}function y(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var d=e.charCodeAt(n);128>d?t+=String.fromCharCode(d):d>127&&2048>d?(t+=String.fromCharCode(d>>6|192),t+=String.fromCharCode(63&d|128)):(t+=String.fromCharCode(d>>12|224),t+=String.fromCharCode(d>>6&63|128),t+=String.fromCharCode(63&d|128))}return t}var A,g,p,v,E,f,h,k,B,w=Array(),I=7,C=12,b=17,S=22,L=5,F=9,R=14,U=20,M=4,O=11,q=16,K=23,J=6,N=10,x=15,D=21;for(e=y(e),w=m(e),f=1732584193,h=4023233417,k=2562383102,B=271733878,A=0;A<w.length;A+=16)g=f,p=h,v=k,E=B,f=i(f,h,k,B,w[A+0],I,3614090360),B=i(B,f,h,k,w[A+1],C,3905402710),k=i(k,B,f,h,w[A+2],b,606105819),h=i(h,k,B,f,w[A+3],S,3250441966),f=i(f,h,k,B,w[A+4],I,4118548399),B=i(B,f,h,k,w[A+5],C,1200080426),k=i(k,B,f,h,w[A+6],b,2821735955),h=i(h,k,B,f,w[A+7],S,4249261313),f=i(f,h,k,B,w[A+8],I,1770035416),B=i(B,f,h,k,w[A+9],C,2336552879),k=i(k,B,f,h,w[A+10],b,4294925233),h=i(h,k,B,f,w[A+11],S,2304563134),f=i(f,h,k,B,w[A+12],I,1804603682),B=i(B,f,h,k,w[A+13],C,4254626195),k=i(k,B,f,h,w[A+14],b,2792965006),h=i(h,k,B,f,w[A+15],S,1236535329),f=c(f,h,k,B,w[A+1],L,4129170786),B=c(B,f,h,k,w[A+6],F,3225465664),k=c(k,B,f,h,w[A+11],R,643717713),h=c(h,k,B,f,w[A+0],U,3921069994),f=c(f,h,k,B,w[A+5],L,3593408605),B=c(B,f,h,k,w[A+10],F,38016083),k=c(k,B,f,h,w[A+15],R,3634488961),h=c(h,k,B,f,w[A+4],U,3889429448),f=c(f,h,k,B,w[A+9],L,568446438),B=c(B,f,h,k,w[A+14],F,3275163606),k=c(k,B,f,h,w[A+3],R,4107603335),h=c(h,k,B,f,w[A+8],U,1163531501),f=c(f,h,k,B,w[A+13],L,2850285829),B=c(B,f,h,k,w[A+2],F,4243563512),k=c(k,B,f,h,w[A+7],R,1735328473),h=c(h,k,B,f,w[A+12],U,2368359562),f=u(f,h,k,B,w[A+5],M,4294588738),B=u(B,f,h,k,w[A+8],O,2272392833),k=u(k,B,f,h,w[A+11],q,1839030562),h=u(h,k,B,f,w[A+14],K,4259657740),f=u(f,h,k,B,w[A+1],M,2763975236),B=u(B,f,h,k,w[A+4],O,1272893353),k=u(k,B,f,h,w[A+7],q,4139469664),h=u(h,k,B,f,w[A+10],K,3200236656),f=u(f,h,k,B,w[A+13],M,681279174),B=u(B,f,h,k,w[A+0],O,3936430074),k=u(k,B,f,h,w[A+3],q,3572445317),h=u(h,k,B,f,w[A+6],K,76029189),f=u(f,h,k,B,w[A+9],M,3654602809),B=u(B,f,h,k,w[A+12],O,3873151461),k=u(k,B,f,h,w[A+15],q,530742520),h=u(h,k,B,f,w[A+2],K,3299628645),f=s(f,h,k,B,w[A+0],J,4096336452),B=s(B,f,h,k,w[A+7],N,1126891415),k=s(k,B,f,h,w[A+14],x,2878612391),h=s(h,k,B,f,w[A+5],D,4237533241),f=s(f,h,k,B,w[A+12],J,1700485571),B=s(B,f,h,k,w[A+3],N,2399980690),k=s(k,B,f,h,w[A+10],x,4293915773),h=s(h,k,B,f,w[A+1],D,2240044497),f=s(f,h,k,B,w[A+8],J,1873313359),B=s(B,f,h,k,w[A+15],N,4264355552),k=s(k,B,f,h,w[A+6],x,2734768916),h=s(h,k,B,f,w[A+13],D,1309151649),f=s(f,h,k,B,w[A+4],J,4149444226),B=s(B,f,h,k,w[A+11],N,3174756917),k=s(k,B,f,h,w[A+2],x,718787259),h=s(h,k,B,f,w[A+9],D,3951481745),f=n(f,g),h=n(h,p),k=n(k,v),B=n(B,E);var Q=r(f)+r(h)+r(k)+r(B);return Q.toLowerCase()};window.addEventListener("load",function(){function e(e){document.getElementById(e).disabled=!0,document.getElementById(e+"_domain").disabled=!0}function t(e){document.getElementById(e).disabled=!1,document.getElementById(e+"_domain").disabled=!1,"sel"==e?document.getElementById(e).focus():document.getElementById(e+"_domain").focus()}for(var n=document.body.getElementsByTagName("*"),d=0;d<n.length;d++){var a=n[d];if("reload"==a.id)!function l(e){setTimeout(function(){--e,document.getElementById("counter").className="attention",document.getElementById("counter").innerHTML=e,e?l(e):location.href="../"},1e3)}(10);else if("commitlink"==a.id)document.getElementById("commitlink").addEventListener("click",function(){document.getElementById("wait").style.display="block"});else if("commitable"==a.id){var o=document.createElement("link");o.type="image/png",o.rel="shortcut icon",o.href="data:image/png;base64,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",document.getElementsByTagName("head")[0].appendChild(o)}else a.id.search("doitlink")>0?document.getElementById(a.id).addEventListener("click",function(){document.getElementById("wait").style.display="block"}):"choose"==a.id?(document.getElementById("file").addEventListener("click",function(){e("txt"),e("sel"),t("fil")}),document.getElementById("text").addEventListener("click",function(){e("fil"),e("sel"),t("txt")}),document.getElementById("sel").addEventListener("change",function(){var e=document.getElementById("sel").value;"- select file -"==e&&(e=""),document.getElementById("sel_domain").value=e}),document.getElementById("list").addEventListener("click",function(){e("fil"),e("txt"),t("sel")}),e("fil"),e("txt"),e("sel")):"password"==a.id?(document.getElementById("normal").addEventListener("submit",function(){passwordMD5("password","pwmd5")}),window.addEventListener("keyup",function(e){e||(e=event);var t=e.keyCode;13==t&&document.getElementById("submit").click()})):"pass1"==a.id?(document.getElementById("new").addEventListener("submit",function(){passwordMD5("pass1","pwmd5n")}),window.addEventListener("keyup",function(e){e||(e=event);var t=e.keyCode;13==t&&document.getElementById("submit").click(),passwordChanged("pass1","pass2")})):"pass_o"==a.id?(document.getElementById("chg").addEventListener("submit",function(){passwordMD5("pass_n1","pwmd5n"),passwordMD5("pass_o","pwmd5")}),window.addEventListener("keyup",function(e){e||(e=event);var t=e.keyCode;13==t&&document.getElementById("submit").click(),passwordChanged("pass_n1","pass_n2")})):"pass2"==a.id?window.addEventListener("keyup",function(e){e||(e=event);var t=e.keyCode;13==t&&document.getElementById("submit").click(),alfa=document.getElementById("pass1").value,beta=document.getElementById("pass2").value,need=document.getElementById("notempty").value,alfa==beta&&("0"==need||beta.length>0)?document.getElementById("submit").disabled=!1:document.getElementById("submit").disabled=!0}):"pass_n2"==a.id?window.addEventListener("keyup",function(e){e||(e=event);var t=e.keyCode;13==t&&document.getElementById("submit").click(),alfa=document.getElementById("pass_n1").value,beta=document.getElementById("pass_n2").value,alfa==beta&&beta.length>0?document.getElementById("submit").disabled=!1:document.getElementById("submit").disabled=!0}):"nofile"==a.id?document.getElementById("list").disabled=!0:"close"==a.id?document.getElementById("close").addEventListener("click",function(){document.getElementById("errorbox").style.display="none",document.getElementById("errshadow").style.display="none"}):"cancel"==a.id?(window.addEventListener("keyup",function(e){e||(e=event);var t=e.keyCode;27==t&&document.getElementById("cancel").click()}),document.getElementById("cancel").addEventListener("click",function(){location.href=previous})):"prev"==a.id?window.addEventListener("keyup",function(e){e||(e=event);var t=e.keyCode;37==t&e.ctrlKey&&document.getElementById("prev").click()}):"next"==a.id?window.addEventListener("keyup",function(e){e||(e=event);var t=e.keyCode;39==t&e.ctrlKey&&document.getElementById("next").click()}):"first"==a.id?window.addEventListener("keyup",function(e){e||(e=event);var t=e.keyCode;38==t&e.ctrlKey&&document.getElementById("first").click()}):"last"==a.id?window.addEventListener("keyup",function(e){e||(e=event);var t=e.keyCode;40==t&e.ctrlKey&&document.getElementById("last").click()}):"new"==a.id&&window.addEventListener("keyup",function(e){e||(e=event);var t=e.keyCode;45==t&&document.getElementById("new").click()})}});var RecaptchaOptions={theme:"white"};
