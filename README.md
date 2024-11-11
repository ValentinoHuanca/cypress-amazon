# COMANDOS

**abrir cypress**
```
yarn e2e
````

**ejecutar TestSuite por terminal**
```
yarn e2e:run
````

**abrir cypress orientado a API**
```
yarn integer
````

**ejecutar TS orientado a API por terminal**
```
yarn integer:run
````

**ejecutar TS por terminal enfocado en un browser especifico y en e2e testing**
```
yarn test:e2e:browser[]
````
browser:[chrome,firefox,edge]

**ejecutar TS por terminal enfocado en un browser especifico y en integer testing**
```
yarn test:integer:browser[]
````
browser:[chrome,firefox,edge]

**ejecutar regression en un browser especifico**
```
yarn integer.browser[]:regression
````
browser:[chrome,firefox,edge]

**eliminar reportes anteriores, para una regression limpia**
```
yarn clean:reports
````

**genera los reportes(HTML and XML)**
```
yarn browser[]:report
````
browser:[chrome,firefox,edge]