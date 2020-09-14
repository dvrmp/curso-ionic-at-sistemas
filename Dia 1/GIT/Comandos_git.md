## Comandos básicos de GIT

- git init ( inicializa un repositorio de git )
- git add  ( Agrega un archivo al stage area )
- git commit ( Crea un registro historíco de los cambios realizados )
- git commit -m " <mensaje> " ( Realiza un commit con un mensaje descriptivo )
- git commit -am ( Realiza un commit con todos los archivos de proyecto con un mensaje )
- git commit --amend -m <"mensaje"> ( Actualiza el mensaje descriptivo del último commit )
- git stash ( Almecena todos los cambios en una pila temporal )
- git stash pop ( Recupera todos los cambios de la pila de stash )
- git diff <Nombre archivo> ( Muestra las diferencias entre el archivo )
- git checkout -- .  ( Revierte todo el proyecto a como estaba en el último commit ) 
- git checkout -- ( Nombre archivo ) ( Revierte los cambios realizados en el archivo indicado )

## Diferentes formas de agregar/excluir achivos al stage

- git add -A ( Agrega todos los archivos que han sido modificados )
- git add *.js   ( Agrega todos los archivos con extensión .js del directorio actual )
- git add "*.js" ( Agrega todos los archivos con extensión .js del proyecyo )
- git add css/ ( Agrega todos los archivos de la carpeta css )
- git add pdfs/*.pdf ( Agrega todos los archivos con extensión pdf de la carpeta pdfs )
- git add -u ( Actualiza todo el stage )

- git reset *.html ( Excluye todos los archivos con extensión html )

NOTA: También se puede crear un carpeta llamada .gitignore; ejemplo;
      .gitignore {
          node_modules/ ( Excluye la carpeta )
          *.log ( Excluye todos los archivos con extensión .log )
      }

NOTA : .gitkeep dentro de una carpeta excluye todo el contenido de la carpeta

## Viajes en el tiempo

- git reset --soft HEAD^ ( Apunta al útimo commit )
- git reset --soft <hash> ( Apunta a un commit específico conservando cambios )
- git reset --hard <hash> ( Apunta a un commit específico eliminando cambios posteriores )
- git reflog ( Muestra el histórico de commits )

## Formas de revisar logs y cambios desde el último commit

- git log --oneline ( Muestra el listado de commit usando hash corto )
- git log --oneline --decortate --al --graph 

- git status -s ( Muestra los cambios del stage con una letra )
- git status -b ( Muestra la rama donde están los cambios )

## Diferencias entre commits

- git diff ( Muestra los cambios realizados entre el commit anterior y el actual )
- git diff --staged ( Verifica todos los archivos que están en el stage )

## Ramas

- git branch ( Muestra todas las ramas )
- git branch <Nombre rama> ( Crea una nueva rama con el nombre indicado )
- git branch -a ( Muestra las ramas locales y remotas )
- git checkout -b <Nombre rama> ( Crea una nueva rama y se desplaza hacia ella )
- git checkout <Nombre rama> ( Cambia a la rama indicada )
- git diff <Nombre rama> <Nombre rama> ( Muestra las diferencias entre dos ramas )
- git branch -d <Nombre rama> ( Elimina la rama con el nombre indicado )

### Unir ramas
- git merge <Nombre rama>
Nota : Hay que desplezarme a la rama a la cuel se quiere fusionar
Ejemplo : git checkout master
          git merge <Nombre rama> master

## Tags

- git tag ( Muestra todos los tag )
- git tag <Nombre tag> ( Crea un nuevo tag con el nombre indicado )
- git tag -d <Nombre tag> ( Elimina un tag con el nombre indicado )
- git tag -a <Anotación> -m <"Mensaje"> ( Crea un nuevo tag con una anotación y un mensaje )
- git tag -a <Anotación> <hash commit> -m <"Mensaje"> ( Crea un tag para un commit específico )
- git show <Anotación> ( Muestra información sobre un tag especifico )

## Tratamiento de archivos

- git mv < nombre de archivo > ( Renombra un archivo )
- git rm < nombre de archivo > ( Elimina un archivo )

__________________________________________________________________________

## GIT REMOTO

- git remote add origin <URL Repositorio> ( Connecta con un repositorio remoto )
- git push ( Actualiza el repositorio remoto )
- git push origin <Nombre Rama> ( Sube la rama indicada al repositorio remoto )
- git clone <URL Repositorio> ( Descarga un repositorio alojado en la nube )
- git pull origin <Rama> ( Obtiene la ultima versión del repositorio )
- git remote prune ( Actualiza las ramas en remoto )

___________________________________________________________________________

## GIT FLOW