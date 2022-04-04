
//criei uma div container e colocarei como filho no body
const divContainer =  document.createElement('div');
divContainer.classList.add('container');

//coloquei divContainer como filha de body; agora é so ir montando o html como esta exigido na atividade;
document.querySelector('body').appendChild(divContainer);



//divJogo vai ser filha de divContainer
const divJogo = document.createElement('div');
divJogo.classList.add('jogo');

divContainer.appendChild(divJogo);



//criarei mais quatro divs para fazer as cores do jogo;

const divBox1 = document.createElement('div');
divBox1.classList.add('box_jogo');
divBox1.classList.add('topo_esquerdo');
//divBox1.classList.add('box_jogo--ativar');
//divBox1.classList.add('jogo_box--podeClicar');


const divBox2 = document.createElement('div');
divBox2.classList.add('box_jogo');
divBox2.classList.add('topo_direito');
//divBox2.classList.add('box_jogo--ativar');


const divBox3 = document.createElement('div');
divBox3.classList.add('box_jogo');
divBox3.classList.add('baixo_esquerdo');
//divBox3.classList.add('box_jogo--ativar');


const divBox4 = document.createElement('div');
divBox4.classList.add('box_jogo');
divBox4.classList.add('baixo_direito');
//divBox4.classList.add('box_jogo--ativar');



//colocarei as div'sBox para ser filhas de divJogo;
divJogo.appendChild(divBox1);
divJogo.appendChild(divBox2);
divJogo.appendChild(divBox3);
divJogo.appendChild(divBox4);
///////////////////////////////////////////////////


//nome dos integrantes do grupo
const footer = document.createElement('footer');
footer.innerText ='Guilherme W. e Marcelo K.';
//colocando como filha de body para aparecer em baixo do jogo
document.querySelector('body').appendChild(footer);



/////aqui vai nascer uma nova div filha de divJogo;
const divOpcoesJogo = document.createElement('div');
divOpcoesJogo.classList.add('opcoes-de-jogo');

divJogo.appendChild(divOpcoesJogo);

//dentro de divOpcoesJogo eu terei que colocar h2;

const h2OpcoesJogo = document.createElement('h2');
h2OpcoesJogo.classList.add('titulo_game');
h2OpcoesJogo.innerText=' Kenzie GUIGUI';

divOpcoesJogo.appendChild(h2OpcoesJogo);

//div que contem os botoes do jogo, ficara ssendo filha de divOpcoesJogo;

const divInterfaceUsuario = document.createElement('div');
divInterfaceUsuario.classList.add('interface-usuario');

divOpcoesJogo.appendChild(divInterfaceUsuario);

//dentro da divInterfaceUsuario devo adicionar mais uma div ara agrupar os botoes;

const divAgrupar = document.createElement('div');
divAgrupar.classList.add('agrupar');

divInterfaceUsuario.appendChild(divAgrupar);

//dentro da divAgrupar teremos uma nova div para contar;

const divContar = document.createElement('div');
divContar.classList.add('interface-usuario-contar');
divContar.innerText='-';

divAgrupar.appendChild(divContar);

//adicionar um 'p' em baixo do divContar;
const pContar = document.createElement('p');
pContar.classList.add('interface-usuario-modo');
pContar.innerText='pont';

divAgrupar.appendChild(pContar);


//ficara em baixo do primeiro agrupar, sendo filha de interface-usuario;
const divAgrupar2 = document.createElement('div');
divAgrupar2.classList.add('agrupar');

divInterfaceUsuario.appendChild(divAgrupar2);

//dentro da divAgrupar2 vamos colocar mais algumas div's;
const divbtn = document.createElement('div');
divbtn.classList.add('interface-usuario-btn');
divbtn.classList.add('interface-usuario-bora');

divAgrupar2.appendChild(divbtn);

//p pra sinalizar o usuario sobre o start;
const pStart = document.createElement('p');
pStart.classList.add('interface-usuario-modo');
pStart.innerText='começar';

divAgrupar2.appendChild(pStart);

/// terceiro agrupamento e colocar como filha de interface-usuario;

const divAgrupar3 = document.createElement('div');
divAgrupar3.classList.add('agrupar');

divInterfaceUsuario.appendChild(divAgrupar3);

///bolinha q ira sinalizar se esta ligado;

const divLed = document.createElement('div');
divLed.classList.add('led');

divAgrupar3.appendChild(divLed);

const div2 = document.createElement('div');
div2.classList.add('interface-usuario-btn');
div2.classList.add('interface-usuario-btn-feito');

divAgrupar3.appendChild(div2);

const pFeito = document.createElement('p');
pFeito.classList.add('interface-usuario-modo');
pFeito.innerText='hard';

divAgrupar3.appendChild(pFeito);


//agrupar 4

const divMaior = document.createElement('div');
divMaior.classList.add('agrupar');
divMaior.classList.add('grupo-maior');

divInterfaceUsuario.appendChild(divMaior);


const pOn = document.createElement('p');
pOn.classList.add('interface-usuario-modo');
pOn.classList.add('interface-usuario-modo-switch');
pOn.innerText='on';

divMaior.appendChild(pOn);


const div3 = document.createElement('div');
div3.classList.add('interface-usuario-btn-switch');

divMaior.appendChild(div3);


const pOf = document.createElement('p');
pOf.classList.add('interface-usuario-modo');
pOf.classList.add('interface-usuario-modo-switch');
pOf.innerText='off';

divMaior.appendChild(pOf);






////
const _data = {
	gameOn: false,
	timeout: undefined,
	sounds: [],

	strict: false,
	playerCanPlay: false,
	score: 0,
	gameSequence: [],
	playerSequence: []
};

const _gui = {
	counter: document.querySelector(".interface-usuario-contar"),
	switch: document.querySelector(".interface-usuario-btn-switch"),
	led: document.querySelector(".led"),
	strict: document.querySelector(".interface-usuario-btn-feito"),
	start: document.querySelector(".interface-usuario-bora"),
	pads: document.querySelectorAll(".box_jogo"),
}

const _soundUrls = [
	"audio/simonSound1.mp3",
	"audio/simonSound2.mp3",
	"audio/simonSound3.mp3",
	"audio/simonSound4.mp3"
];

_soundUrls.forEach(sndPath => {
	const audio = new Audio(sndPath);
	_data.sounds.push(audio);
});

_gui.switch.addEventListener("click", () => {
    _data.gameOn = _gui.switch.classList.toggle('interface-usuario-btn-switch--ligado');

    _gui.counter.classList.toggle('interface-usuario-contar--ligado');
    _gui.counter.innerHTML = '--';

    _data.strict = false;
    _data.playerCanPlay =false;
    _data.score = 0;
    _data.gameSequence = [];
    _data.playerSequence = [];

    disablePads();

    _gui.led.classList.remove('led--ligado')
});

_gui.strict.addEventListener("click", () => {
    if(!_data.gameOn)
        return;
    
   _data.strict = _gui.led.classList.toggle('led--ligado');

});

_gui.start.addEventListener("click", () => {
    startGame();
});

const padListener = (e) => {
    if(!_data.playerCanPlay)
        return;

    let soundId;
    _gui.pads.forEach((pad, key) => {
        if(pad === e.target){
            soundId = key
        }

             
    });

    e.target.classList.add('box_jogo--ativar');
    
     _data.sounds[soundId].play();
     _data.playerSequence.push(soundId);

     e.target.classList.remove('box_jogo--ativar');

     const currentMove = _data.playerSequence.length -1;

     if (_data.playerSequence[currentMove]!== _data.gameSequence[currentMove]){
         _data.playerCanPlay = false;
         disablePads();
         playSequence();
     }
     else if(currentMove === _data.gameSequence.length -1){
         newColor();
         playSequence();

     }
     waitForPlayerClick();
}

_gui.pads.forEach(pad => {
	pad.addEventListener("click", padListener);
});
//sequencia de cores jogada no start
const startGame = () => {
    blink("--", ()=>{
        //console.log('tudo certo');
        newColor();
        
        playSequence();
    })
}
//transformando casas do numero
const setScore = () => {
    const score = _data.score.toString();
    const display = '00'.substring(0, 2 - score.length) + score;
    _gui.counter.innerHTML = display;
}

const newColor = () => {
   _data.gameSequence.push( Math.floor(Math.random()*4));
    _data.score++;

    setScore();
}

const playSequence = () => {
    let counter = 0,
        padOn = true;

    _data.playerSequence = [];
    _data.playerCanPlay = false;

    const interval = setInterval(()=>{
        if(!_data.gameOn){
            clearInterval(interval);
            disablePads();
             
            return;
        }
        if(padOn){
            if(counter === _data.gameSequence.length){
                clearInterval(interval);
                disablePads();
                waitForPlayerClick();
                _data.playerCanPlay = true;
                return;
            }
            const sndId = _data.gameSequence[counter];
            const pad = _gui.pads[sndId];

            _data.sounds[sndId].play();
            pad.classList.add('box_jogo--ativar');
            counter++;
        }
        else{
            disablePads();
        }
        padOn = !padOn;
    },800)
}
//aqui seria qual seria o texto q aparecera aos o piscar;
const blink = (text, callback) => {
    let counter =0,
        on = true;

    _gui.counter.innerHTML = text;

    const interval = setInterval(()=>{
        if(!_data.gameOn){
            clearInterval(interval);
            _gui.counter.classList.remove('interface-usuario-contar--ligado');
            return;
        }
        if(on){
            _gui.counter.classList.remove('interface-usuario-contar--ligado');
        }
        else{
            _gui.counter.classList.add('interface-usuario-contar--ligado');

            if(++counter === 3){
                clearInterval(interval);
                callback();
            }
        }
        on = !on;
    }, 250)
}

const waitForPlayerClick = () => {

    clearTimeout(_data.timeout);

    _data.timeout = setTimeout(()=>{
        if(!_data.playerCanPlay)
            return;

        disablePads();
        playSequence();
    }, 7000);
}

//const resetOrPlayAgain = () => {

//}

//const changePadCursor = (cursorType) => {

//}

const disablePads = () => {
    _gui.pads.forEach(pad => {
        pad.classList.remove('box_jogo--ativar');
    })
}



