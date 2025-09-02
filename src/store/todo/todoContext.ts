import { createContext } from "react";
import type { TodoStateType } from "./TodoInterface";

export const TodoContext = createContext<TodoStateType>([]);