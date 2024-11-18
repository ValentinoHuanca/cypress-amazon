## US02 | OrangeHRM | Buzz | eliminar post

**COMO** administrador en OrangeHRM

**QUIERO** poder eliminar un post

**PARA** moderar el contenido que se sube

Feature: Delete Post

    Background:
      Given el usuario admin ha iniciado sesión
      And el usuario admin se encuentra en la sección "Buzz"

    Scenario 1: El admin intenta eliminar una publicación
      Given el admin haga click en el menú de tres puntos
      When el admin hace clic en "Delete  post"
      Then deberia aparecer un pop up
      And el admin puede hacer clic en el botón " Yes, Delete" O puede hacer clic en el botón "No, Cancel"


    Scenario 2: el admin elimina un post
      Given el admin se sitúa en el pop up(pre eliminar post)
      When el admin hace click en el button "Yes, Delete" 
      Then debería aparecer en la pantalla un mensaje amigable: "Successfully Deleted"
      And el post no debería ser visible

    Scenario 3: el admin cancela la eliminación del post
      Given el admin se sitúa en el pop up(pre eliminar post)
      When el admin hace click en el button "No, Cancel"
      Then el pop up deberia cerrarse
      And el post aún debería estar visible
