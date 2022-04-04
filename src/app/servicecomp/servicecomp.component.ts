import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-servicecomp',
  templateUrl: './servicecomp.component.html',
  styleUrls: ['./servicecomp.component.css'],
  providers: [StudentService]
})
export class ServicecompComponent implements OnInit {

  //records
  Studentinfo1: string [] = [];
  Studentinfo2: string [] = [];
  Studentinfo3: string [] = [];

  //call arrays

  getInfoFromService1(){
    this.Studentinfo1 = this.myservice.getinfo1()
  }
  getInfoFromService2(){
    this.Studentinfo2 = this.myservice.getinfo2()
  }
  getInfoFromService3(){
    this.Studentinfo3 = this.myservice.getinfo3()
  }

  //fetch data from service class (parameter,property)

  constructor(private myservice:StudentService) { }

  ngOnInit(): void {
  }

}
