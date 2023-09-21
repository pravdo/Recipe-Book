import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop-app';
  loadedFeature = 'recipe';

  onNavigate(fetature: string) {
    this.loadedFeature = fetature;
  }
}
