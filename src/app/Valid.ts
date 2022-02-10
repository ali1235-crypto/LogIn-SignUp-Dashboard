import { FormControl, FormGroup, Validators } from "@angular/forms";

export class Valid {
  form:FormGroup
  firstname:FormControl
  lastname:FormControl
  middlename:FormControl
  gender:FormControl
  date:FormControl
  phone: FormControl;
  email: FormControl;
  departement: FormControl;
  usertype: FormControl;
  username: FormControl;
  password: FormControl;
  remeberme: FormControl;
  constructor() {
    this.firstname= new FormControl(
    '',[Validators.required,Validators.pattern(/^[a-z]*$/i)]
    );
    this.lastname= new FormControl(
      '',[Validators.required,Validators.pattern(/^[a-z]*$/i)]
      );
    this.middlename=new FormControl('',
    [Validators.pattern(/^[a-z]*$/i)]);
    this.gender=new FormControl('gender',[Validators.required]);
    this.date=new FormControl('',[Validators.required])
    this.phone=new FormControl('',[Validators.required,Validators.pattern(/^[1-9]*$/i),Validators.maxLength(11)])
    this.email=new FormControl('',[Validators.email]);
    this.departement=new FormControl('',[Validators.required]);
    this.usertype=new FormControl('type',[Validators.required]);
    this.username=new FormControl('',[Validators.required]);
    this.password=new FormControl('',[Validators.required]);
    this.remeberme=new FormControl(false);
  this.form=new FormGroup({
      'first':this.firstname,
      'last':this.lastname,
      'middle':this.middlename,
      'gender':this.gender,
      'date':this.date,
      'phone':this.phone,
      'email':this.email,
      'dep':this.departement,
      'usertype':this.usertype,
      'username':this.username,
      'password':this.password,
      'remeberme':this.remeberme
    })
  }
}
