alert("hi");

/*
laterThingDiv='
<div  id="laterthing-com-bookmarklet"
      style=" position:absolute;
              right:20px;
              top:20px;
              width:20em;
              height:5em;
              opacity:0.5;
              z-index:100;
              background:#000;
              text-align:center;
              border:solid 2px #ccc;">
  <p  id="laterthing-com-bookmarklet-p"
      style=" margin:0px;
              padding:0px;
              line-height:1em;
              height:1em;
              position:absolute;
              top:50%;
              margin-top:-0.5em;
              width:100%;
              font-family: Helvetica, Arial, sans-serif;
              font-size: 20px;
              font-weight:lighter;">
    Saving LaterLink…
  </p>
</div>';

document.body.innerHTML+=laterThingDiv;
var request=new XMLHttpRequest;request.open("POST","http://localhost:5000/later-links/bookmarklet.json?link_url="+encodeURIComponent(location.href)+"&user_key=d39e7d47-2949-4254-a29e-9648b36c3287&page_title="+encodeURIComponent(document.title),true);

request.onreadystatechange=function()
{
  var e=4,t=200;
  if ( request.readyState == e && request.status == t)
  {
    if ( request.responseText )
    {
      document.getElementById("laterthing-com-bookmarklet-p").innerHTML="Saved!";
      setTimeout(function(){document.getElementById("laterthing-com-bookmarklet").remove()},2000)
    }
    else
    {
      document.getElementById("laterthing-com-bookmarklet").innerHTML="Saved!"
    }
  }
};
request.send(null);
*/