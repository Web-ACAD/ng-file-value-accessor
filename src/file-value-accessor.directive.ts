import {Directive, ElementRef, Renderer2} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


@Directive({
	selector: 'input[type=file][formControlName],input[type=file][formControl],input[type=file][ngModel]',
	host: {
		'(change)': 'onChange($event.target.files)',
		'(blur)': 'onTouched()',
	},
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: FileValueAccessorDirective,
			multi: true,
		},
	],
})
export class FileValueAccessorDirective implements ControlValueAccessor
{


	constructor(
		private $el: ElementRef,
		private $renderer: Renderer2,
	) {}


	public onChange = (_: any) => {};


	public onTouched = () => {};


	public writeValue(value: any): void {}


	public registerOnChange(fn: any): void
	{
		this.onChange = fn;
	}


	public registerOnTouched(fn: any): void
	{
		this.onTouched = fn;
	}


	public setDisabledState?(isDisabled: boolean): void
	{
		this.$renderer.setProperty(this.$el.nativeElement, 'disabled', isDisabled);
	}

}
