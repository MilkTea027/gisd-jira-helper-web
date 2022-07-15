import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/_shared/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { PageBaseComponent } from '../page-base.component';
import { LocalStorage } from '../../_shared/consts/local-storage.consts';


@Component({
    selector: 'app-story-point-settings',
    templateUrl: './story-point-settings.component.html',
    styleUrls: ['./story-point-settings.component.scss'],
})

export class StoryPointSettingsComponent extends PageBaseComponent implements OnInit {
    storyPointForm!: FormGroup;
    collapsed: boolean = true;

    constructor(
        private toastr: ToastrService,
        private cacheService: LocalStorageService,
        private formbuilder: FormBuilder,
        protected override router: Router) {
        super(router);
    }

    override ngOnInit() {
        super.ngOnInit();
        this.setValidators();
    }

    get f() {
        return this.storyPointForm.controls;
    }

    toggle(): void {
        this.collapsed = !this.collapsed;
    }

    setValidators(): void {
        this.storyPointForm = this.formbuilder.group({
            storyPointOne: [this.cacheService.sp1Value, Validators.required],
            storyPointTwo: [this.cacheService.sp2Value, Validators.required],
            storyPointThree: [this.cacheService.sp3Value, Validators.required],
            storyPointFive: [this.cacheService.sp5Value, Validators.required],
            storyPointEight: [this.cacheService.sp8Value, Validators.required],
        });
    }

    submit() {
        if (!this.storyPointForm.invalid) {
            this.cacheService.setStoryPoints(
                            this.f['storyPointOne'].value,
                            this.f['storyPointTwo'].value,
                            this.f['storyPointThree'].value,
                            this.f['storyPointFive'].value,
                            this.f['storyPointEight'].value);
    
            this.toastr.success("Story points updated");

        } else {
            this.toastr.error("Story points not updated");
        }
    }
}