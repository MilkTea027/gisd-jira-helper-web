import { AfterContentChecked, ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PageBaseComponent } from './page-base.component';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
})

export class PageComponent extends PageBaseComponent implements AfterContentChecked {
    boardResourcesCollapsed: boolean = false;

    constructor(
      protected override router: Router,
      private changeDetector: ChangeDetectorRef) {
      super(router);
    }
  
    ngAfterContentChecked() : void {
      //// PREVENTS ERROR https://angular.io/errors/NG0100
      this.changeDetector.detectChanges();
    }
  
    @HostListener("window:scroll", []) onWindowScroll() {
    }
  
    get currentYear(): string {
      const date = new Date();
      return date.getFullYear().toString();
    }
    
    get onTopPage(): boolean {
      const verticalOffset =
              window.pageYOffset
              || document.documentElement.scrollTop
              || document.body.scrollTop
              || 0;
  
      return verticalOffset === 0;
    }

    boardResourcesToggle(): void {
      this.boardResourcesCollapsed = !this.boardResourcesCollapsed;
    }
  
    scrollToTop(): void {
        const section = document.getElementById('top-page');
        
        if (!!section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        }
    }
}