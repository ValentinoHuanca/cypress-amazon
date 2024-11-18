# OrangeHRM | PIM | Agregar un nuevo empleado con usuario

**COMO** administrador en OrangeHRM

**QUIERO** poder agregar un nuevo empleado con usuario

**PARA** gestionar su perfil en el sistema de la empresa

## Acceptance criteria

Background:

  Given: el administrador esté registrado en el sistema exitosamente
  And: se le autoasigne un perfil de administrador por defecto
  And: el administrador se encuentra en Módulo PIM

Scenario 01: administrador incorpora un nuevo empleado con usuario al sistema de gestión

  Given: el administrador se ubica en la sección "Add Employee"
  And: activa la opción de "Create Login Details"
  When: rellena todos los datos requeridos (incluyendo credenciales)
  And: hace click en el botón "Save"
  Then: debe aparecer un Log Message indicando "Sucess, Succesfully Saved"
  And: se direcciona a la página con los detalles personales del perfil del usuario creado
  And: se agrega el nuevo empleado en la lista de empleados (Employee List) y el nuevo usuario (en el Admin)

 Scenario 02: administrador NO incorpora un nuevo empleado con usuario al sistema de gestión

  Given: el administrador se ubica en la sección "Add Employee"
  And: activa la opción de "Create Login Details" con el toggle
  When: rellena los campos con data invalida (incluyendo los campos en credenciales)
  And: hace click en el botón "Save"
  Then: deberían aparecer Log Messages indicando las reglas de negocios establecidas
  And: permanece en la misma página de "Add Employee"
  And: no se direcciona a la página con los detalles personales del perfil de un nuevo usuario/empleado creado



## Business rules

input firstName:

* Should not exceed 30 characters X

* Required X

input middleName:

* Should not exceed 30 characters X

input lastName:

* Should not exceed 30 characters X

* Required X

input employeeId:

* Should not exceed 10 characters X

* Employee Id already exists X

input username:

* Should not exceed 40 characters X

* Should be at least 5 characters X

* Username already exists X

* Required X

input password:

* Should not exceed 64 characters X

* Should have at least 7 characters X

* Required X

* Your password must contain minimum 1 number X

* Your password must contain minimum 1 lower-case letter X

input verificacionPassword:

* Passwords do not match X