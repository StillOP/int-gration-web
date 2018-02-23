var i = 0;
var images = document.getElementsByClassName('carousel-item');
var comments = document.getElementsByClassName('comment');
            
for(var j = 0; j < 4; j++)
{
    images[j].style = "display:none;";
    comments[j].style = "display:none;"
}
            
setInterval(function() {
    i++;
    if(i >= images.length)
    {
        i = 0;
    }
    images[i].style = "display:block;";
    comments[i].style = "display:block;";
                
    for(var j = 0; j < 4; j++)
    {
        if (j == i) { continue; }
        images[j].style = "display:none;";
        comments[j].style = "display:none;";
    }
}, 3000);