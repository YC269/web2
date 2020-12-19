// JavaScript Document

var widths=910;    
var w=2;
var widthss=widths+w;
var heights=410; 
var heightss=heightss+w;
var heightt=20;
var counts=3;     

img1=new Image();img1.src='images/banner1.jpg';
url1=new Image();url1.src='#';

img2=new Image();img2.src='images/banner2.jpg';
url2=new Image();url2.src='#';

img3=new Image();img3.src='images/banner3.jpg';
url3=new Image();url3.src='#';

var nn=1;
var key=0;    
var tt;   

function change_img()
{
if(key==0){key=1;} 
else if(document.all)
{
document.getElementById("pic").filters[0].Apply(); 
document.getElementById("pic").filters[0].Play(duration=2);
document.getElementById("pic").filters[0].Transition=23;
}

eval('document.getElementById("pic").src=img'+nn+'.src'); 
eval('document.getElementById("url").href=url'+nn+'.src');

for (var i=1;i<=counts;i++)
{
    document.getElementById("xxjdjj"+i).className='axx';     
}
document.getElementById("xxjdjj"+nn).className='bxx';
nn++;
if(nn>counts){nn=1;} 
tt=setTimeout('change_img()',4000); 
}
function changeimg(n)
{
nn=n; 
window.clearInterval(tt);
change_img();
}
//样式表
document.write('<style>');
document.write('.axx{padding:1px 6px;margin-left:3px;border-left:#cccccc 1px solid;font-size:12px;}');
document.write('a.axx:link,a.axx:visited{text-decoration:none;color:#666;');
document.write('line-height:12px;font:12px sans-serif;background-color:#eee;border:1px solid #666}');

document.write('.bxx{padding:1px 6px;margin-left:3px;border-left:#cccccc 1px solid;}');
document.write('a.bxx:link,a.bxx:visited{text-decoration:none;color:#111;');
document.write('line-height:12px;font:12px sans-serif;background-color:#fff;border:1px solid #111}');

document.write('</style>');
//内容部分
document.write('<div style="width:'+widthss+'px;height:'+heights+'px;');
document.write('overflow:hidden;text-overflow:clip;float:left;">');
document.write('<div><a id="url" target="_blank"><img id="pic" ');
document.write('style="border:0;');
document.write('FILTER: progid:DXImageTransform.Microsoft.RevealTrans (duration=2,transition=23)"');
document.write(' width='+widths+' height='+heights+' /></a></div>');
document.write('<div style="filter:alpha(style=1,opacity=10,finishOpacity=90);');
document.write('width:100%-2px;text-align:right;');
document.write('top:-19px;position:relative;margin:-5px 9px 0 1px;height:22px;line-height:22px;');
document.write('z-index:4000;"><div style="height:22px;line-height:22px;padding:2px 0 0 0;">');


for(var i=1;i<counts+1;i++)
{
document.write('<a href="javascript:changeimg('+i+');" id="xxjdjj'+i+'"');
document.write(' class="axx" target="_self">'+i+'</a>');
}
document.write('</div></div></div>');


change_img();