import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2TestProjectAppComponent } from '../app/ng2-test-project.component';

beforeEachProviders(() => [Ng2TestProjectAppComponent]);

describe('App: Ng2TestProject', () => {
  it('should create the app',
      inject([Ng2TestProjectAppComponent], (app: Ng2TestProjectAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-test-project works!\'',
      inject([Ng2TestProjectAppComponent], (app: Ng2TestProjectAppComponent) => {
    expect(app.title).toEqual('ng2-test-project works!');
  }));
});
