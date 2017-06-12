import {FormControl} from '@angular/forms'

export class FormValidators{

    static LimitMessageText(control : FormControl){
        var maxLength = 150;
        if(control.value.length>maxLength-1){
            return {limitLength:true,maxLength:maxLength};
        }
        return null;
    }

    static EmailAddress(control:FormControl){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value)){
            return {validEmail:false};
        }
        return {validEmail:true};
    }

    static OnlyNumbers(control:FormControl){
        if (/^[0-9]{1,45}$/.test(control.value)){
            return {numberError:false};
        }
        return {numberError:true};
    }
}
