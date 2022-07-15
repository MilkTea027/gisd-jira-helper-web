import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IssueModel, IssuesResponse } from 'src/app/_shared/models/issue.model';
import { IssuesService } from 'src/app/_shared/services/issues.service';
import { PageBaseComponent } from '../page-base.component';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-burndown',
    templateUrl: './burndown.component.html',
    styleUrls: ['./burndown.component.scss'],
})

export class BurndownComponent extends PageBaseComponent implements OnInit {
    @ViewChild('burndownChart') burndownChart!: ElementRef;
    issues: Array<IssueModel> = [];
    chart: any;

    constructor(private issueService: IssuesService,
        protected override router: Router) {
        super(router)
    }

    override ngOnInit(): void {
        super.ngOnInit();
        this.loadIssues();
    }

    loadIssues() : void {
        this.issueService.get({ boardId: 37 })
                .subscribe({
                    next: (response: IssuesResponse) => {
                        this.issues = response.issues;
                        console.log('issues', this.issues);
                    },
                    error: (errMessage: any) => {
                        console.log('issues err', errMessage);
                    }
                });
    }
    
    displayChart(): void {
        if (!!this.issues && this.issues.length > 0) {
            // this.chart = new Chart(this.burndownChart.nativeElement, {
                
            // });
        }
    }
}