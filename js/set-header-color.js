function hashStringModNum (str, num) {
  sum = 0;
  for (var i=0 ; i < str.length ; i++){
    sum += (str.charCodeAt(i));
  }
  hash = sum % num;
  return hash
}

/*
 http://paletton.com/#uid=14d0u0ktJLXe1RAmoNvKXBNL7ox
 http://paletton.com/#uid=14P0u0ktJLXe1RAmoNvKXBNL7ox
 http://paletton.com/#uid=1000u0ktJLXe1RAmoNvKXBNL7ox
 http://paletton.com/#uid=10P0u0ktJLXe1RAmoNvKXBNL7ox
 http://paletton.com/#uid=11q0u0ktJLXe1RAmoNvKXBNL7ox
 http://paletton.com/#uid=12P0u0ktJLXe1RAmoNvKXBNL7ox
*/
colorlist = [
  "#A28EE8", "#7355DE", "#4F27DA",
  "#D284E6", "#BD46DA", "#B015D6",
  "#FF8F8F", "#FF4D4D", "#FF1212",
  "#FFD48F", "#FFBB4D", "#FFA512",
  "#FFEC8F", "#FFE04D", "#FFD612",
  "#87F087", "#46E946", "#10E710",
  "#FFFFFF"
]

if(channelname = document.getElementById('active_channel_name').innerText){
  color_channelname = "color_" + channelname;


/*
  if( ! localStorage[color_channelname] ){
    num = hashStringModNum(channelname, colorlist.length);
    localStorage[color_channelname] = colorlist[num];
  }

  document.getElementById('header').style.backgroundColor= localStorage[color_channelname];
*/

num = hashStringModNum(channelname, colorlist.length);
document.getElementById('header').style.backgroundColor= colorlist[num];

}
