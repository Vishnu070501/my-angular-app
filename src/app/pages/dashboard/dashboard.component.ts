import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyRowComponent } from "../../components/my-row/my-row.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    MyRowComponent,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  rows: {content:string,isClicked:boolean}[] = [{content:'Row 1',isClicked:false},{content:'Row 2',isClicked:false},{content:'Row 3',isClicked:false},{content:'Row 4',isClicked:false},{content:'Row 5',isClicked:false}];
  clickedArray: {id:string,isClicked:boolean}[] = this.rows.map((r,index) => ({
    id: index.toString(),
    isClicked: r.isClicked
  }));
  rowClicked = (id: string) => {
    const index = Number(id);
    this.clickedArray[index].isClicked = !this.clickedArray[index].isClicked;
  }
  constructor(private router: Router) {}
  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
