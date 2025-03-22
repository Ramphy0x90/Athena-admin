import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'textToTitle',
    standalone: true
})
export class TextToTitlePipe implements PipeTransform {

    transform(value: string): string {
        return value
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }
}
