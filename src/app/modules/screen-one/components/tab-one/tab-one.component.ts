import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.styl']
})

export class TabOneComponent implements OnInit {
  public  myForm: FormGroup;
  flag = false;
  click = false;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.myForm  = this.fb.group({
      dia: [null, Validators.compose([Validators.required, Validators.maxLength(2), Validators.minLength(2)])],
      mes: [null, Validators.compose([Validators.required, Validators.maxLength(2), Validators.minLength(2)])],
    });
  }
  get f() {return this.myForm.controls; }

  public goTo(url) {
    this.router.navigate([url]);
  }

  onSubmit() {
    this.flag = true;
        if (this.myForm.invalid) {
          this.click = false;
            return false;
        }
        this.click = true;
        console.log(JSON.stringify(this.myForm.value));
        return true;
  }
  public eventoClick() {
    console.log(this.click);
  if (this.click) {
    return true;
  }  console.log(this.click);
  return false;
}


  verificarLargo (campo) {
    console.log('campo');

    console.log(this.myForm.get('dia'));
    console.log('controls');

    console.log(this.myForm.controls.dia.hasError('minlength'));

    return true;
  }


  }


/*
export class TabOneComponent implements OnInit {
  public  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.myForm  = this.fb.group({
      dia: new FormControl(''),
      mes: new FormControl(''),
    });
  }
  */



