import { DocumentClient } from "aws-sdk/clients/dynamodb";
import Todo from "../models/todo";

export default class TodoServerice {
  private Tablename: string = "TodosTable";

  constructor(private docClient: DocumentClient) {}
// Create  Service
  async createTodo(todo: Todo): Promise<Todo> {
    await this.docClient
      .put({
        TableName: this.Tablename,
        Item: todo,
      })
      .promise();
    return todo as Todo;
  }

// Get All   Service
  async getAllTodos(): Promise<Todo[]> {
    const todos = await this.docClient.scan({
        TableName: this.Tablename,
    }).promise()
    return todos.Items as Todo[];
 }
}
