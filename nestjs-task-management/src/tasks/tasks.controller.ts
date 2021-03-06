import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {Task, TaskStatus} from './task.model';
import { CreateTaskDto } from './dto/creat-tas.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}
    
    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[]{
        if(Object.keys(filterDto).length){
            return this.taskService.getTasksWithFilters(filterDto);
        }else{
            return this.taskService.getAllTasks();
        }
    }

    @Get('/:id')
    gwtTaskById(@Param('id') id: string): Task {
        return this.taskService.getTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task{
        console.log(createTaskDto.title + ' ' +createTaskDto.description);
        return this.taskService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void{
        return this.taskService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,    //extrae de la url
        @Body('status') status: TaskStatus,     //extrae del body
    ): Task{
        return this.taskService.updateTask(id, status);
    }

}

