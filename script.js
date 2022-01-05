let calcTwo = document.querySelector('.calc__Two');
let calcResult = document.querySelector('.calc__result');
let page = document.querySelector('.wrapper__section');
let numberButton = document.querySelector('.bt');
let comandButton = document.querySelector('.cm');
let enterButton = document.querySelector('.ravno');
let memory = 0;
function ssum(a) {
  switch(a) {
            case 'MS':
                memory = parseInt(calcResult.innerText);
                alert(`В памяти ${memory}`);
            break;
            case 'M+':
                if( calcResult.innerText == '0' || calcResult.innerText == '') {
                    break;
                }
                 memory += parseInt(calcResult.innerText);
                 alert(`В памяти ${memory}`);
            break;
            case 'M-':
                if(calcResult.innerText == '0' || calcResult.innerText == '') {
                    break;
                }
                 memory -= parseInt(calcResult.innerText);
                 alert(`В памяти ${memory}`);
            break;
            case 'MC':
                memory = 0;
                alert(`Память очищена`);
            break;
            case 'С':
                calcResult.innerText = '0';
            break;
            case 'СE':
                calcResult.innerText = '0';
                memory = 0;
                console.log(memory);
            break;
            case '%':
                if(calcResult.innerText == '0' || calcResult.innerText == '') {
                    break;
                }
                 calcResult.innerText = procent;
            break;
            case '=':
                if(calcResult.innerText == '0' || calcResult.innerText == '') {
                    break;
                }
                calcResult.innerText = eval(calcResult.innerText)
            break;    
            default:
                if (calcResult.innerText == '0'){
                    calcResult.innerText = '';
                }
                calcResult.innerText += a;
          }
};


// page.addEventListener('click', function(event) {
//     if(!event.target.classList.contains('.batton')) return;
//     let value = event.target.innerText;
//     let procent = calcResult.innerText / 100;
//     let memory = "";
//      //calcResult.innerText += value;

//     switch(value) {
//         case 'MS':
//             memory = calcResult.innerText;
//             console.log(memory);
//         break;
//         case 'M+':
//             if( calcResult.innerText == '') {
//                 break;
//             }
//              memory += parseInt(calcResult.innerText);
//              console.log(memory);
//         break;
//         case 'M-':
//             if( calcResult.innerText == '') {
//                 break;
//             }
//              memory -= parseInt(calcResult.innerText);
//              console.log(memory);
//         break;
//         case 'MC':
//             memory = "";
//             console.log(memory);
//         break;
//         case 'С':
//             calcResult.innerText = '';
//         break;
//         case 'СE':
//             calcResult.innerText = '';
//             memory = "";
//         break;
//         case '%':
//             if( calcResult.innerText == '') {
//                 break;
//             }
            
//              calcResult.innerText = procent;
//         break;
//         case '=':
//             if( calcResult.innerText == '') {
//                 break;
//             }
//                 calcResult.innerText = eval(calcResult.innerText) 
//         break;    
//         default:
//             calcResult.innerText += value
//       }
//   });