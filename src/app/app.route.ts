import { Routes } from '@angular/router';
import { RutaHomeComponent } from './ruta-home/ruta-home.component';
import { RutaFAQComponent } from './ruta-faq/ruta-faq.component';
import { RutaNoEncontradoComponent } from './ruta-no-encontrada/ruta-no-encontrada.component';
import { RutaPerfilComponent } from './ruta-perfil/ruta-perfil.component';
import { RutaUsuarioComponent } from './ruta-usuario/ruta-usuario.component';
export const ARREGLO_RUTAS: Routes = [
    {
      component: RutaHomeComponent,
      path: 'home',
      children: [
        {
          path: 'perfil',
          component: RutaPerfilComponent
        },
        {
          path: 'usuario/:usuarioId/u/:universidadId',
          component: RutaUsuarioComponent
        },
        {
          path: '',
          redirectTo: 'perfil',
          pathMatch: 'full'
        }
      ]
    },
    {
      component: RutaFAQComponent,
      path: 'FAQ'
    },
    {
      component: RutaNoEncontradoComponent,
      path: '404'
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: '**',
      component: RutaNoEncontradoComponent
    }
  ];