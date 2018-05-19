import {NgModule} from '@angular/core';

import {FileValueAccessorDirective} from './file-value-accessor.directive';


@NgModule({
	declarations: [
		FileValueAccessorDirective,
	],
	exports: [
		FileValueAccessorDirective,
	],
})
export class FileValueAccessorModule {}
