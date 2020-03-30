function Contrast() {

    if (document.getElementById('contrast').innerHTML == 'Add more contrast') {
        document.getElementById('contrast').innerHTML = 'Remove additional contrast';

        if(document.getElementById('inverse').innerHTML == 'Normal mode') {
            document.body.style.color = "#FFF";
        }else{
            document.body.style.color = "#000";
        }
    }
    else{
        document.getElementById('contrast').innerHTML = 'Add more contrast';
        document.body.style.color = "#454545";
    }

}

function Invertmode() {
    if (document.getElementById('inverse').innerHTML == 'Inverted mode') {
        document.getElementById('inverse').innerHTML = 'Normal mode';
        document.querySelector("html").style.background = "#000";
        document.body.style.color = "#BABABA";
        document.getElementById('contrast').style.color = "#FFF";

    }
    else{
        document.getElementById('inverse').innerHTML = 'Inverted mode';
        document.querySelector("html").style.background = "#fefefe";
        document.body.style.color = "#454545";
        document.getElementById('contrast').style.color = "#000";
    }
}