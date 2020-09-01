/* tslint:disable:max-line-length no-empty-interface */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '|shared/forms';
import {ProductDetailService} from '../../../controllers/ProductDetail';

@Injectable()
export class ProductDetailFormService {
  form: FormGroup;
  constructor(
    private productDetailService: ProductDetailService,
  ) {
    this.form = new FormGroup({
      productId: new FormControl(undefined, [Validators.required]),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.productDetailService.ProductDetail(data);
  }
}
