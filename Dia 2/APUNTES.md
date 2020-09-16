### Node : 

Es el lenguaje de javascript compilado en un sitema ( Fuera del navagegador ) a través del motor v8 de Gooogle

## NVM ( Es control de versiones de node )
- nvm install <Versión de node>

## NPM ( Es el instalador de paquetes de node (requiere un proyecto de node) )

- npm init ( Crea un nuevo proyecto de node )
- npm init -y ( Crea un nuevo proyecto de node configurado por defecto )
- npm install <Nombre paquete> ---save ( Instala un nuevo paquete )
- npm install <@types/Nomnbre del paquete> --save-dev ( La depencia istallada no se incluye en producción )
- npm install -g ( Instala un paquete globalmente en el sistema )
- npm uninstall <Nombre paquete> ( Elimina el paquete indicado )

### El package.jon 

- Es el archivo de configuración del proyecto

### El package-lock.json

- Es el archivo de dependencias de que han sido implicimante instalados con un paquete

### Javascript S6

Tipos de variables 

- window ( Mantiene el valor de una variable declarada )

## Programación funcional

SCSS_______________________________________________________________
# Variables SCSS
SCSS
En scss es posible crear variables , Normalementse escriben al principio de la pagina ejemplo: $size:50px , $colors = (blue:blue,orange:orange,green:green)

header{
    width: $size
}
section {
    color: map-get($colors,blue)
}

