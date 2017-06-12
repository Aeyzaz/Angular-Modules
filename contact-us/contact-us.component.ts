import {Component,OnInit,Output,EventEmitter} from '@angular/core'
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms'
import {ContactUsService} from './contact-us.service'
import {FormValidators} from './FormValidators'
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

@Component({
    selector:'contact-us',
    templateUrl : './contact-us.template.html',
    styles:[`
        .red{
            color:red;
        }
        .form-area{
            background-color: #FAFAFA;
	        padding: 10px 40px 60px;
	        margin: 10px 0px 60px;
	        border: 1px solid GREY;
	    }
    `]
})

export class ContactUsComponent implements OnInit{
    contactForm : FormGroup;

    @Output() onFormSubmit = new EventEmitter();

    constructor(private _fb:FormBuilder,private _contactUsService: ContactUsService){
        
    }

    ngOnInit(){
        console.log('onInit');
        this.contactForm = this._fb.group({
            user_fullname: ["",Validators.required],
            user_email:["",FormValidators.EmailAddress],
            user_phone:["",FormValidators.OnlyNumbers],
            user_subject:["",Validators.required],
            user_message:["",FormValidators.LimitMessageText]
        });

        // var count = 10;
        // Observable.interval(1000)
        //     .take(count)
        //     .filter(x=>x>0)
        //     .map(x=>count-x)
        //     .subscribe(x=>{
        //     console.log(x);
        // })

        var count = 60;
        Observable.timer(0,1000)
            .take(count)
            .map(()=>--count)
            .subscribe(x=>console.log(x));
        // var _email = this.contactForm.controls['user_email'];
        // _email.valueChanges
        //     .filter(f_val=>f_val.length>4)
        //     .debounceTime(500)
        //     .distinctUntilChanged()
        //     .flatMap(x=>{
        //         return "Email is: "+x
        //     })
        //     .subscribe(x=>{
        //         console.log(x);
        //     })
    }

    processForm(){
        //alert(this.contactForm.controls['fullname'].value);
        //console.log(this.contactForm.controls);
        this._contactUsService.sendFormRequest([{'fullname':'azaz'}]);
        this.onFormSubmit.emit();
    }
}