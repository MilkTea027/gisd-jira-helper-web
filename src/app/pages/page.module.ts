import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/_shared/shared.module';
import { BoardResourcesComponent } from './board-resources/board-resources.component';
import { BurndownComponent } from './burndown/burndown.component';
import { PageComponent } from './page.component';
import { ProjectBoardsComponent } from './project-boards/project-boards.component';
import { ResourcesCapacityComponent } from './resources-capacity/resources-capacity.component';
import { StoryPointSettingsComponent } from './story-points-setting/story-point-settings.component';

@NgModule({
  declarations: [
    PageComponent,
    BoardResourcesComponent,
    BurndownComponent,
    ProjectBoardsComponent,
    ResourcesCapacityComponent,
    StoryPointSettingsComponent,
  ],
  imports: [
    SharedModule.forRoot(),
  ],
})
export class PageModule {}