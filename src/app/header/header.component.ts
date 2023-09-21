import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>(); // create an object based on EventEmitter class

  onSelect(fetature: string) {
    this.featureSelected.emit(fetature);
  }
}
