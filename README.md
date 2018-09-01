# Ng Knife

Ng Knife is a simple utility library for angular project

## Installing

Run `npm i ng-knife --save` to install.

## What's in the Ng Knife?

Ng Knife contains the following:

### Directives:

* `knifeNoSpaces`  - No whitespace allowed.
* `knifeNoCopyPaste` - No copy, cut and paste allowed.
* `knifeAlphanumeric` - Only alphanumeric and whitespaces allowed.
* `knifeOnlyNumbers` - Only numbers allowed.

## Usage

### Setup

Import the module `NgKnifeModule` from `ng-knife` in the module to be used:

``` typescript
... 
import { NgKnifeModule } from 'ng-knife';
...
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgKnifeModule
  ],
  ...
});
export class AppModule { }
```

### Using it:

``` html
<!-- No Spaces -->
<input knifeNoSpaces type="text" placeholder="No Spaces">

<!-- No Copy Paste -->
<input knifeNoCopyPaste type="text" placeholder="No Copy Paste">
  
<!-- Alphanumeric -->
<input knifeAlphanumeric type="text" placeholder="Alphanumeric">

<!-- Only Numbers -->
<input knifeOnlyNumbers type="text" placeholder="Only Numbers">
  
```

## Contributing

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## License
Ng Knife is free software and may be redistributed under the terms specified in the LICENSE file.

