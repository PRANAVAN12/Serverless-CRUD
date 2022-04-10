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