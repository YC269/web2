// JavaScript Document

var tew=document.getElementById('cont')
        // ti.innerHTML="你好";

        function getTime(){     	//获取时间
        	var date=new Date();

            var hour=date.getHours();
            var minute=date.getMinutes();
            var second=date.getSeconds();

            if (hour<10) {
            	hour='0'+hour;
            }
            if (minute<10) {
            	minute='0'+minute;
            }
            if (second<10) {
            	second='0'+second;
            }

            var x=date.getDay();//获取星期

            var time=hour+':'+minute+':'+second
              tew.innerHTML=time;//将时间显示在div内
        }
        getTime();
        setInterval(getTime,1000);