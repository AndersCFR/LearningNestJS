# Apuntes NEST

## Comandos
> Instalar nest
>> npm i -g @nest/cli
> Revisar versión NEST
>> nest -v

> Crear proyecto
>> nest new nestjs-task-management
> Ejecutar en modo dev
>> npm run start:dev

> Ver esquématicos (help)
>> nest g --help

> Crear módulo
>> nest g module tasks

> Crear un controlador
>> nest g controller tasks

> Crear un controlador sin archivo de test
>> nest g controller tasks --no-spec

> Crear un servicio
>> nest g service tasks --no-spec


## Elementos

1. Módulo: Singleton que organiza toda la estrucutra del proyecto.
2. Controlador: Toma las peticiones (toma las urls).
3. Handler: Métodos de los controladores que realizan las acciones (Get, Post, etc), el handler es 
el que retorna la respuesta al cliente.

4. Servicio: Definido como un provider, como su nombre lo indica provee de información para los
controladores, creados con el decorador @Injectable()

• Cuando ya tenemos un servicio podemos inyectarlo a un controlador en su constructor, por ejemplo:
@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}
}

• Además debemos especificar estos servicios dentro de los providers del módulo
5. Modelo: Clase que especifica los atributos de una entidad
6. DTO (Data Transfer Object): Define como un dato se envía sobre la red, no es un modelo, puede 
   servir para validar, mejora el rendimiento. Permite principalmente epecificar la forma que debería
   tener un dato para realizar determinada operación.



