import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    console.info('-------------------------------------------------');
    console.info('|       Hey, thanks for visting here! 🥰 🥰      |');
    console.info('-------------------------------------------------');
  })
  .catch((err) => console.error(err));
