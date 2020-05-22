let a=document.getElementsByTagName("a");
let checkbox=document.getElementsByClassName("part1");

// function to send all the checked checkboxes having associated ids from database through query parameters   
function check(event)
{
    event.preventDefault();
    let s="";
    let count=0;
    for(let i=0;i<checkbox.length;i++)
    {
        if(checkbox[i].checked==true)
        {
            s+=checkbox[i].value;
            count++;
        }
    }
        let url="delete/?";
        if(count>0)
        {
            
        
            for(let i=0;i<checkbox.length;i++)
            {
                if(checkbox[i].checked==true)
                {
                    if(count>1)
                    {
                        url+="id"+i+"="+checkbox[i].value+"&";
                    }
                    else
                    {
                        url+="id"+i+"="+checkbox[i].value;
                    }
                    count--;
                }
                
            
            }
            window.location.href=url;
            
        }


}
a[0].addEventListener('click',check);


// to define the color of category column  
let p3=document.getElementsByClassName("p3");
for(let i=0;i<p3.length;i++)
{
    if(p3[i].textContent=="Personal")
    {
        p3[i].style.backgroundColor="rgb(233, 200, 150)";
    }
    else if(p3[i].textContent=="Home")
    {
        p3[i].style.backgroundColor="rgb(150, 233, 168)";
    }
    else if(p3[i].textContent=="Office")
    {
        p3[i].style.backgroundColor="rgb(150, 233, 233)";
    }
    else if(p3[i].textContent=="Family")
    {
        p3[i].style.backgroundColor="rgb(200, 150, 233)";
    }
    else 
    {
        p3[i].style.backgroundColor="rgb(233, 225, 150)";
    }
}

