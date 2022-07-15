import { Component } from '@angular/core';
import { PageBaseComponent } from '../page-base.component';


@Component({
    selector: 'app-resources-capacity',
    templateUrl: './resources-capacity.component.html',
    styleUrls: ['./resources-capacity.component.scss'],
})

export class ResourcesCapacityComponent extends PageBaseComponent {
    collapsed: boolean = true;

    toggle(): void {
        this.collapsed = !this.collapsed;
    }
}