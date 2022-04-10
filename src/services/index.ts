import dynamoDBClient from "../models/";
import TodoServerice from "./todo.service"

const todoService = new TodoServerice(dynamoDBClient());
export default todoService;