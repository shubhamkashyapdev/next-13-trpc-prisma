import TodoList from "./_components/TodoList";
import { serverClient } from "@/app/_trpc/serverClient";

export default async function Home() {
  const data = await serverClient.todo.getTodos();
  return (
    <div>
      <TodoList data={data} />
    </div>
  );
}
