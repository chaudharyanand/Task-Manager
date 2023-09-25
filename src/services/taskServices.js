import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task){
    const result = await httpAxios
    .post("/api/tasks",task)
    .then((response) =>response.data);
     return result;
};

export async function getTaskofUser(task){
    const result = await httpAxios
    .post("/api/users/${userId}",task)
    .then((response) =>response.data);
     return result;
};