import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  info1: string [] = ["Archie", "SA1", "Grade1"];
  info2: string [] = ["Maeve", "SA21", "Grade2"];
  info3: string [] = ["Peter", "SA34", "Grade3"];

  getinfo1() : string[] { 
    return this.info1;
  }

  getinfo2() : string[] { 
    return this.info2;
  }

  getinfo3() : string[] { 
    return this.info3;
  }

  constructor() { }
}
