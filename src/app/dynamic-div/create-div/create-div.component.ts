import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-div',
  templateUrl: './create-div.component.html',
  styleUrls: ['./create-div.component.css']
})
export class CreateDivComponent implements OnInit {

  divArray: any = [];
  clickedDiv: any;
  constructor() { }

  ngOnInit(): void {
    this.divArray = []
  }
  /**
   * For adding new div to div array
   */
  toAddDivDynamically() {
    this.divArray.push(this.divArray.length);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.toAddDivDynamically();
  }
  /**
   *  To open alert box when button is clicked
   * @param boxNumber
   */
  toOpenAlertBox(boxNumber: any) {
    this.clickedDiv = boxNumber
  }

}
