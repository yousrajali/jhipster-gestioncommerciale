import { NgModule } from '@angular/core';

import { GestioncommercialeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GestioncommercialeSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GestioncommercialeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GestioncommercialeSharedCommonModule {}
