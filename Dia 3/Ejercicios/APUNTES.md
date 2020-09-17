### Archivo network_security_config

- Este archivo puede permitir una conexión http ejemplo :

<network-security-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">URL DEL BACKEND</domain>
    </domain-config>
</network-security-config>

### Generar una apk 
- adb install platforms\android\app\build\output\apk\debug\app-debug.apk

### Ciclo de vida de un componente 

- El ciclo de vida define los estados del componente

- ngOnChanges ( Detecta los cambios en el componente (Sobre todo en @Input()) )
- ngOnit ( Se ejecuta cuando el componente es inicializado )
- ngOnDestroy ( Se ejecuta cuando se elimina/desaparece el componente )

### VARIOS

- En las directivas se usa el * cuando un elemento va a replicarse
- [hidden]='condición' oculta un elemento 

constructor(private navController)
