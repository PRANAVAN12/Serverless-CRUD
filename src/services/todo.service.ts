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
    const todos = await this.docClient
      .scan({
        TableName: this.Tablename,
      })
      .promise();
    return todos.Items as Todo[];
  }

  //Single Get  Service
  async getTodo(id: string): Promise<any> {
    const todo = await this.docClient
      .get({
        TableName: this.Tablename,
        Key: {
          todosId: id,
        },
      })
      .promise();
    if (!todo.Item) {
      throw new Error("Id does not exit");
    }
    return todo.Item as Todo;
  }
  
  //Update  Service
  async updateTodo(id: string, todo: Partial<Todo>): Promise<Todo> {
    const updated = await this.docClient
        .update({
            TableName: this.Tablename,
            Key: { todosId: id },
            UpdateExpression:
                "set #status = :status",
            ExpressionAttributeNames: {
                "#status": "status",
            },
            ExpressionAttributeValues: {
                ":status": true,
            },
            ReturnValues: "ALL_NEW",
        })
        .promise();
    return updated.Attributes as Todo;
}
}
