import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './children1.component.html'
})
export class Children1Component implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((data) => { });
  }

  navigate() {
    debugger;
    this.router.navigate(["/app/children1/main/10"])
  }

}
