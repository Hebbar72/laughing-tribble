document.addEventListener("DOMContentLoaded", function (event){
    console.log("done loading");

    var link_names = ["start", "early_years"];
    var button = document.querySelector("#bt2");
    button.val = 0;
    console.log(button);

    button.addEventListener("click",function1);
    function function1(event){
        this.val = (this.val + 1)%2;
        var link = document.querySelector("#links");
        if (this.val === 1){
            document.querySelector("#bt2 div").className = "arrow2";
            button.style.paddingLeft = "7%";
            link.style.borderColor = 'transparent';
            link.innerHTML += "<ul> Links";
            for(var i = 0;i < 2; i++){
                link.innerHTML += "<li><a href = #" + link_names[i] + ">" + link_names[i] + "</li>";
            }
            link.innerHTML += "</ul>";
        }
        else{
            document.querySelector('#links').innerHTML ="";
            document.querySelector("#bt2 div").className = "arrow1";
            button.style.paddingLeft = "0%";
            document.querySelector("#links").style.borderColor = 'transparent';
        }
    }

    document.querySelector("button").addEventListener("click", function(event)
    {
        document.querySelector(".trans-box").style.opacity = "0";
    })

    document.querySelector("button").addEventListener("blur", function(event)
    {
        document.querySelector(".trans-box").style.opacity = "1";
    })
});