import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {

  constructor() { }

  iconArray = [
    {
      icon: 'assets/images/shape-4.svg',
      text: 'Choose the currency format you want to convert FROM.'
    },
    {
      icon: 'assets/images/shape-4.svg',
      text: 'Choose the currency format you want to convert TO.'
    },
    {
      icon: 'assets/images/shape-4.svg',
      text: 'Get your currency conversion results.'
    }
  ];
  tableContent = [
    {
      first: 'US Dollar',
      second: 'Australian Dollar',
      third: 'Malaysian Ringgit'
    },
    {
      first: 'US Dollar',
      second: 'Australian Dollar',
      third: 'Malaysian Ringgit'
    },
    {
      first: 'US Dollar',
      second: 'Australian Dollar',
      third: 'Malaysian Ringgit'
    },
    {
      first: 'US Dollar',
      second: 'Australian Dollar',
      third: 'Malaysian Ringgit'
    }
  ];
  ngOnInit() {
  }

}
