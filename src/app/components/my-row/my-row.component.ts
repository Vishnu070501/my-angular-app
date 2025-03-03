import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-row',
  imports: [
    CommonModule
  ],
  templateUrl: './my-row.component.html',
  styleUrl: './my-row.component.css'
})
export class MyRowComponent {
 @Input() id: string = '';
 @Input() isClickedArray: {id:string,isClicked:boolean}[] = [];
 @Input() content: string = '';
 hovered: boolean = false;
 @Output() rowClicked = new EventEmitter<string>();

  handleClick = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    this.rowClicked.emit(this.id);
  }
  getHeight(id: string): string {
    return this.isClickedArray[Number(id)].isClicked ? '100px' : '50px';
  }  
}
