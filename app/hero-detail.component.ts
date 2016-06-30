import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
`

})

//export class to make it available to other classes
export class HeroDetailComponent implements OnInit, OnDestroy
{
  @Input()
  hero: Hero;

  constructor(
  private heroService: HeroService,
  private route: ActivatedRoute) {
}
ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
    let id = +params['id'];
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  });
}

ngOnDestroy() {
  this.sub.unsubscribe();
}

}
