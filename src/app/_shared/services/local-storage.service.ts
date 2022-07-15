import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorage } from '../../_shared/consts/local-storage.consts';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {

    get sp1Value(): number {
        return this.getNumber(LocalStorage.StoryPoint1)
            || environment.storyPoints.one;
    }

    get sp2Value(): number {
        return this.getNumber(LocalStorage.StoryPoint2)
            || environment.storyPoints.two;
    }

    get sp3Value(): number {
        return this.getNumber(LocalStorage.StoryPoint3)
            || environment.storyPoints.three;
    }

    get sp5Value(): number {
        return this.getNumber(LocalStorage.StoryPoint5)
            || environment.storyPoints.five;
    }

    get sp8Value(): number {
        return this.getNumber(LocalStorage.StoryPoint8)
            || environment.storyPoints.eight;
    }

    set(key: string, value: any): void {
        if (!!value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    get(key: string): any {
        let value = localStorage.getItem(key);

        if (!!value) {
            return JSON.parse(value);
        }

        return null;
    }

    getNumber(key: string): number {
        let value = this.get(key);

        if (!!value) {
            return parseFloat(value);
        }

        return 0;
    }

    setStoryPoints(sp1Value: number,
                   sp2Value: number,
                   sp3Value: number,
                   sp5Value: number,
                   sp8Value: number) {
        this.set(LocalStorage.StoryPoint1, sp1Value);
        this.set(LocalStorage.StoryPoint2, sp2Value);
        this.set(LocalStorage.StoryPoint3, sp3Value);
        this.set(LocalStorage.StoryPoint5, sp5Value);
        this.set(LocalStorage.StoryPoint8, sp8Value);
    }
}