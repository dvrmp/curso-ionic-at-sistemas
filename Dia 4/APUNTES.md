## Crear un componente de forma manual

- crear tres archivos
    micomponente.component.ts
    micomponente.component.scss
    micomponente.component.html

Se incluye el decorador 
@Component({
    selector: 'app-mi-componente',
    templateUrl : './micomponente.component.html,
    styleUrls: './micomponente.component.scss'
})
export class MiComponenteComponent {

}

## Crear un módulo de forma madual

- Se incluye el decorador 

@NgModule({
    declarations: [ MiComponente ],
    exports : [ MiComponente ] ( Permite usar este componente en los modulos donde este importado este módulo )
    imports :[
        Modulos necesarios (ejm : CommonModule,IonicModule)
    ]
})

export class ComponentesModule {

}

## Crear un servicio de forma manual

(
    Si no se especifica el provideIn , el servicio hay que importarlo
    como provider en el mpodulo donde quiere usarse
)
                (scope)
@Injectable({proveIn: 'root'})
export default class MiServicioService {

}
## Pasar valores entre componentes ( Padre a hijo )

-Se utiliza el decorador @Input() en el componente que lo recibe
- @Input() objeto : tipoObjeto 

- Para pasar el elemento desde el componente padre se utiliza en el tag
[nombreObjeto]='Objeto'

## Pasar valores entre componentes ( Hijo a Padre )

- Se utiliza el decorado @Output() nombreOutpu : EventEmmiter<TIPO QUE EMITE> = new EventEmmiter<TIPO QUE EMITE>

- Para usarlo se escribe en tag del componente (nombreOutput)='funcion del padre'

## LazyLoading
- Este concepto permite cargar un modulo en concreto desde la ruta indicada

## Transclusión

- Para incluir contenido en un componente que no tiene plantilla hmtl
  se utiliza la directiva [ng-content]

## Otros 

- para convertir un string en number se escribe + delante del objeto/función
