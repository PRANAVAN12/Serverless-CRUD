import { handlerPath } from '@libs/handler-resolver';
//calling create todo handler
export const createTodo = {
    handler: `${handlerPath(__dirname)}/handler.createTodo`,
    events: [
        {
            http: {
                method: 'post',
                path: 'todo',
            },
        },
    ],
};

//calling GetAll todo handler
export const getAllTodos = {
    handler: `${handlerPath(__dirname)}/handler.getAllTodos`,
    events: [
        {
            http: {
                method: 'get',
                path: 'todo/',
            },
        },
    ],
};

//calling Get Single todo handler
export const getTodo = {
    handler: `${handlerPath(__dirname)}/handler.getTodo`,
    events: [
        {
            http: {
                method: 'get',
                path: 'todo/{id}',
            },
        },
    ],
};

//calling Update todo handler
export const updateTodo = {
    handler: `${handlerPath(__dirname)}/handler.updateTodo`,
    events: [
        {
            http: {
                method: 'put',
                path: 'todo/{id}',
            },
        },
    ],
};

//calling Delete todo handler
export const deleteTodo = {
    handler: `${handlerPath(__dirname)}/handler.deleteTodo`,
    events: [
        {
            http: {
                method: 'delete',
                path: 'todo/{id}',
            },
        },
    ],
};