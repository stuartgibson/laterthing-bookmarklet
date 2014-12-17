laterThingDiv='<div  id="laterthing-com-bookmarklet" style=" position:absolute;right:20px;top:20px;width:20em;height:5em;opacity:0.5;z-index:20001;              background:#000;text-align:center;border:solid 2px #ccc;"><p  id="laterthing-com-bookmarklet-p" style=" margin:0px;padding:0px;line-height:1em;              height:1em;position:absolute;top:50%;margin-top:-0.5em;width:100%;font-family: Helvetica, Arial, sans-serif;font-size: 20px;font-weight:lighter;">    Saving LaterLink…</p></div>';

document.body.innerHTML+=laterThingDiv;
userKey = document.getElementById("laterthing-com-user-key").text();
var request=new XMLHttpRequest;request.open("POST","http://laterthing.com/later-links/bookmarklet.json?link_url="+encodeURIComponent(location.href)+"&user_key="+userKey+"&page_title="+encodeURIComponent(document.title),true);

request.onreadystatechange=function()
{
  var e=4,t=200,timeout=2000;
  if ( request.readyState == e )
  {
    if (request.status == t)
    {
      responseMessage = "Saved!"
    }
    else
    {
      if ( request.responseText )
      {
        result = JSON.parse(request.responseText);
        timeout=4000;
        responseMessage = result.errors[0];
      }
      else
      {
        responseMessage = "Error Saving :("
      }
    }
    document.getElementById("laterthing-com-bookmarklet-p").innerHTML=responseMessage;
    setTimeout(function(){document.getElementById("laterthing-com-bookmarklet").remove()},timeout)
  }
};
request.send(null);