import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { RepoService } from 'src/app/services/repo.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contact = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });


  constructor(
    private toastController: ToastController,
    private repos: RepoService
  ) { }

  ngOnInit() {

  }


  send(){

    const data = {
      name: this.contact.get('name').value,
      email: this.contact.get('email').value,
      message: this.contact.get('message').value,
    };

    this.repos.postContact(data).subscribe((info) => {
      console.log(info);
      this.getToast();
      this.contact.reset();
    });

  }


  async getToast(){
    const toast = await this.toastController.create({
      header: 'Emma',
      message: 'Message has been sent!',
      position: 'bottom',
      duration: 3000,
      translucent: true,
      color: 'dark',
      animated: true,
      cssClass: 'dismiss-btn',
      buttons: [
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });


    toast.present();
  }

}
