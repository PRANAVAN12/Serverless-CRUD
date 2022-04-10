import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { v4 } from "uuid";
import todosService from '../../services/'

// Create todo handler
export const createTodo = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
      const id = v4();
      const todo = await todosService.createTodo({
          todosId: id,
          title: event.body.title,
          description: event.body.description,
          createdAt: new Date().toISOString(),
          status: false
      })
      return formatJSONResponse({
          todo
      });
  } catch (e) {
      return formatJSONResponse({
          status: 500,
          message: e
      });
  }

})

// GetAll todo handler
export const getAllTodos = middyfy(async (): Promise<APIGatewayProxyResult> => {
    const todos = await todosService.getAllTodos();
    return formatJSONResponse ({
        todos
    })
})