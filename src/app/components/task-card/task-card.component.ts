import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent  implements OnInit {
  @Input() hasHeader:boolean = false;
  @Input() hasFooter:boolean = false;

  @Input() createdAt:string = "null";
  @Input() updatedAt:string = "null";
  @Input() status:string= "null";
  @Input() notes:string= "Tidak ada catatan";
  @Input() value:string= "Belum dinilai";
  constructor() { }

  ngOnInit() {}

}
