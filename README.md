[![NPM version](https://img.shields.io/npm/v/@webacad/ng-file-value-accessor.svg?style=flat-square)](https://www.npmjs.com/package/@webacad/ng-file-value-accessor)
[![Build Status](https://img.shields.io/travis/Web-ACAD/ng-file-value-accessor.svg?style=flat-square)](https://travis-ci.org/Web-ACAD/ng-file-value-accessor)

# WebACAD/NgFileValueAccessor

Angular form module which will give you the `FileList` from your `<input type="file">` inputs. 

## Before you use

1. Check angular issue: [https://github.com/angular/angular/issues/7341](https://github.com/angular/angular/issues/7341)
2. If it's resolved, **don't** use this library

## Dependencies

* `@angular/core`
* `@angular/forms`
* `rxjs`

## Installation

```bash
$ npm install --save @webacad/ng-file-value-accessor
```

or with yarn

```bash
$ yarna add @webacad/ng-file-value-accessor
```

## Register module

```typescript
import {NgModule} from '@angular/core';
import {FileValueAccessorModule} from '@webacad/ng-file-value-accessor';

@NgModule({
    imports: [
        FileValueAccessorModule,
    ],
})
export class AppModule {}
```

And profit!
