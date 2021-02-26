
import { AbstractControl } from '@angular/forms';

//  si https no estas al principio || o no lleva .com incluido
export function validateURL(control: AbstractControl){
    if(!control.value.startsWith('https://') || !control.value.includes('.com'))
    {       //tiene que empezar con https  y debe incluir un .com
      return {validUrl: true}; //y si vuelve null es correcto
    }
        return null;

}


//     export function validarCorreo (control: AbstractControl) {
    
//       if(!control.value.includes('@') || !control.value.includes('.com') && !control.value.includes('.es'))
//     {       //tiene que empezar con https  y debe incluir un .com
//       return {validcorreo: true}; //y si vuelve null es correcto
//     }
//         return null;

// }