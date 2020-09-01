/* tslint:disable:max-line-length no-empty-interface */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '|shared/forms';
import {OrderService} from '../../../controllers/Order';

@Injectable()
export class OrderFormService {
  form: FormGroup;
  constructor(
    private orderService: OrderService,
  ) {
    this.form = new FormGroup({
      orderDto: new FormGroup({
        id: new FormControl(undefined, [Validators.required]),
        name: new FormControl(undefined, []),
      }, []),
      producer: new FormControl(undefined, []),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.orderService.Order(data);
  }
}
