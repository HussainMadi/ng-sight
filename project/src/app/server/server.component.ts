import { Component, OnInit, Input } from '@angular/core';
import { Server } from './../shared/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }
  color:string;
  buttonText:string;
  @Input() serverInput:Server;

  ngOnInit(): void { 
    this.setServerStatus(this.serverInput.isOnline);
  }

  setServerStatus(isOnline:boolean){
    if(isOnline){
      this.serverInput.isOnline =true;
      this.color='#66886A',
      this.buttonText = 'Shut Down';
    }else{
      this.serverInput.isOnline =false;
      this.color = '#FF6868';
      this.buttonText = 'Start';
    }
  }
 toggleStatus(onLineStatus:boolean) {
   console.log(this.serverInput.name,':',onLineStatus);
   this.setServerStatus(!onLineStatus);
 }
}
 