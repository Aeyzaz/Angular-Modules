import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/map'

@Injectable()

export class ContactUsService{
    constructor(private _http:Http){
    }

    sendFormRequest(form){
        console.log(form);
    }
}