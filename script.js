
                                                // Navigation hovering
function navHover()
{
   document.getElementById("homenav").style.borderBottom="0px";
}

                                             // Navigation (NOT) hovering
function navLeave()
{
   document.getElementById("homenav").style.borderBottom="2px solid rgb(141, 42, 239)";
}

                                              // side bar appears
function sidebarPop(){
   document.getElementById("sidebar").style.display="block";
   document.getElementById("back").style.display="block";
   document.getElementById("menu").style.display="none";
   document.getElementById("line1").style.visibility="hidden";
   document.getElementById("line2").style.visibility="hidden";
   document.getElementById("line3").style.visibility="hidden";
}
 
                                             // sidebar disappears
function sidebarOff(){
   document.getElementById("sidebar").style.display="none";
   document.getElementById("back").style.display="none";
   document.getElementById("menu").style.display="block";
   document.getElementById("line1").style.visibility="visible";
   document.getElementById("line2").style.visibility="visible";
   document.getElementById("line3").style.visibility="visible";
}