import { Component, Input, OnInit } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-example-theme',
  templateUrl: './example-theme.component.html',
  styleUrls: ['./example-theme.component.scss']
})
export class ExampleThemeComponent implements OnInit {

  @Input() name: string = 'add theme name';

  constructor() { }

  ngOnInit(): void {
  }

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

}
