import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardModel, ProjectBoardResponse, ProjectModel } from 'src/app/_shared/models/board.model';
import { BoardsService } from 'src/app/_shared/services/boards.service';
import { PageBaseComponent } from '../page-base.component';


@Component({
    selector: 'app-project-boards',
    templateUrl: './project-boards.component.html',
    styleUrls: ['./project-boards.component.scss'],
})

export class ProjectBoardsComponent extends PageBaseComponent implements OnInit {
    projects?: Array<ProjectModel> = [];
    boards?: Array<BoardModel> = [];
    activeProject?: ProjectModel;
    activeBoard?: BoardModel;

    constructor(
        private boardService: BoardsService,
        protected override router: Router) {
            super(router);
    }

    override ngOnInit(): void {
        super.ngOnInit();
        this.initValues();
    }

    initValues() {
        this.boardService
            .getProjectBoards()
            .subscribe({
                next: (response: ProjectBoardResponse) => {
                    this.projects = response.projects;
                    this.activeProject =  this.projects[0];
                    this.boards = this.activeProject?.boards;
                },
                error: (errMessage: any) => {
                    console.log('err', errMessage);
                }
            });
    }

    changeProject($event: any) {
        var selected = $event.target.value;
        this.activeProject = this.projects?.find(p => p.name == selected);
        this.boards = this.activeProject?.boards;
    }

    changeBoard($event: any) {
        var selected = $event.target.value;
        this.activeBoard = this.boards?.find(b => b.name == selected);
    }
}