import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import * as JiraApi from 'jira-client';
import { environment } from 'src/environments/environment';

@Component({ template: '' })    
export class PageBaseComponent implements OnInit {
  //protected jiraApi!: JiraApi;
  
  constructor(protected router: Router) {
  }

  ngOnInit(): void {
    //this.initJiraSettings();
    this.showImageForFirefox();
  }

  get activePage(): string {
    const url: string = window.location.href;
    const page: string = url.split('/').pop() || '';
    return page;
  }

  openNewTab(url: string): void {
    window.open(url);
  }

  numbersOnlyKeyPress($event: any) {
    return $event.charCode >= 48 && $event.charCode <= 57
  }

    //// HACK FOR NOW
  showImageForFirefox(): void {
    if (window.navigator.userAgent.includes('Firefox')) {
      for (var i=0; i<document.images.length; i++) {
        if (!document.images[i].alt) {
          document.images[i].setAttribute('alt', document.images[i].className);
        }
      }
    }
  }
}