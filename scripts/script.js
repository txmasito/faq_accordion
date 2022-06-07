const qcontainer = document.getElementById('q-container');
const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const q4 = document.getElementById('q4');
const q5 = document.getElementById('q5');
const icon1 = document.getElementById('icon-q1');
const icon2 = document.getElementById('icon-q2');
const icon3 = document.getElementById('icon-q3');
const icon4 = document.getElementById('icon-q4');
const icon5 = document.getElementById('icon-q5');
const childq1 = document.getElementById('rq1');
const childq2 = document.getElementById('rq2');
const childq3 = document.getElementById('rq3');
const childq4 = document.getElementById('rq4');
const childq5 = document.getElementById('rq5');
let id;

qcontainer.addEventListener('click', (e) => {
    id = e.target.id;
    mostrarOcultar();
    // console.log(e);
})

const mostar = (button, response, icon) => {
    response.style.display = 'block';
    button.value = 'novis';
    button.style.fontWeight = '700';
    button.style.color = 'hsl(237, 12%, 33%)';
    icon.style.transform = 'rotate(180deg)';
}

const ocultar = (button, response, icon) => {
    response.style.display = 'none';
    button.value = 'vis';
    button.style.fontWeight = '400';
    button.style.color = 'black';
    icon.style.transform = 'rotate(360deg)';
}

const mostrarOcultar = () => {
    switch(id){
        case 'q1':
        case 'icon-q1':
            if(q1.value == 'vis'){
                mostar(q1, childq1, icon1);
                ocultar(q2, childq2, icon2);
                ocultar(q3, childq3, icon3);
                ocultar(q4, childq4, icon4);
                ocultar(q5, childq5, icon5);
            } else{
                ocultar(q1, childq1, icon1);
            }
            break;
        case 'q2':
        case 'icon-q2':
            if(q2.value == 'vis'){
                ocultar(q1, childq1, icon1);
                mostar(q2, childq2, icon2);
                ocultar(q3, childq3, icon3);
                ocultar(q4, childq4, icon4);
                ocultar(q5, childq5, icon5);
            } else{
                ocultar(q2, childq2, icon2);
            }
            break;
        case 'q3':
            case 'icon-q3':
            if(q3.value == 'vis'){
                ocultar(q1, childq1, icon1);
                ocultar(q2, childq2, icon2);
                mostar(q3, childq3, icon3);
                ocultar(q4, childq4, icon4);
                ocultar(q5, childq5, icon5);
            } else{
                ocultar(q3, childq3, icon3);
            }
            break;
        case 'q4':
            case 'icon-q4':
            if(q4.value == 'vis'){
                ocultar(q1, childq1, icon1);
                ocultar(q2, childq2, icon2);
                ocultar(q3, childq3, icon3);
                mostar(q4, childq4, icon4);
                ocultar(q5, childq5, icon5);
            } else{
                ocultar(q4, childq4, icon4);
            }
            break;
        case 'q5':
        case 'icon-q5':
            if(q5.value == 'vis'){
                ocultar(q1, childq1, icon1);
                ocultar(q2, childq2, icon2);
                ocultar(q3, childq3, icon3);
                ocultar(q4, childq4, icon4);
                mostar(q5, childq5, icon5);
            } else{
                ocultar(q5, childq5, icon5);
            }
            break;
    }
}