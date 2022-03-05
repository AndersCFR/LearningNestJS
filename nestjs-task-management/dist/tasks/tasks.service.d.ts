import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/creat-tas.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[];
    getTaskById(id: string): Task;
    createTask(createTaskDto: CreateTaskDto): Task;
    deleteTask(id: string): void;
    updateTask(id: string, status: TaskStatus): Task;
}
