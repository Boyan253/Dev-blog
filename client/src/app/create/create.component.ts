import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

constructor(private fb: FormBuilder, private userService: UserService) {
 
  
}

async create(form: NgForm): Promise<void>{

if (form.invalid) {
  throw Error('form is invalid')
}
const postData = {
  title: form.value.title ?? '',
  image:form.value.image ?? '',
  tags: form.value.tags ?? '',
  description: form.value.description ?? '',
 
};
console.log(postData);

}

}
