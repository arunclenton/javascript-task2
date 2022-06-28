function add() {
    var star = document.getElementById('start').value;
    var open = document.getElementById('open').value;
    var close = document.getElementById('close').value;
    
    console.log(star);

    if (star ==open) {

        document.getElementById('text').innerHTML = 'we are open';
    }

    else {

        document.getElementById('text').innerHTML = 'we are close';

    }

}
let button = document.getElementById('submit')
button.addEventListener('click', add)

