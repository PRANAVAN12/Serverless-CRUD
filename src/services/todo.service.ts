import { DocumentClient } from "aws-sdk/clients/dynamodb";
import Todo from "../models/todo";

export default class TodoServerice {
  private Tablename: string = "TodosTable";

  constructor(private docClient: DocumentClient) {}
// Create  service
  async createTodo(todo: Todo): Promise<Todo> {
    await this.docClient
      .put({
        TableName: this.Tablename,
        Item: todo,
      })
      .promise();
    return todo as Todo;
  }
}
