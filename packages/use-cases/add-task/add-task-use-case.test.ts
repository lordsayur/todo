import { describe, test, expect, vi, Mock } from "vitest";
import { Task, TaskStatus } from "@todo/entities";

import { TaskRepository } from "../ports/task-repository";

import { AddTaskUseCase } from "./add-task-use-case";
import { AddTaskUseCaseRequest } from "./add-task-use-case.request";
import { AddTaskUseCaseResponse } from "./add-task-use-case.response";

type MockTaskRepositoryFactoryParam = {
  add?: Mock<[number, string, TaskStatus?, number?], Task>;
  getAll?: Mock<[], Task[]>;
  getSingle?: Mock<[], Task>;
  update?: Mock<[], Task>;
  delete?: Mock<[], Task>;
};
function mockTaskRepositoryFactory(
  params: MockTaskRepositoryFactoryParam
): TaskRepository {
  return {
    add: vi.fn(),
    getAll: vi.fn(),
    getSingle: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
    ...params,
  };
}

describe("AddTaskUseCase", () => {
  describe("execute", () => {
    test("should add task", async () => {
      // arrange
      const request = {
        userId: 1,
        description: "Task 1",
      } as AddTaskUseCaseRequest;
      const mockedTaskRepository: TaskRepository = mockTaskRepositoryFactory({
        add: vi
          .fn<[number, string, TaskStatus?, number?], Task>()
          .mockReturnValue({
            id: 1,
            createdDate: new Date(),
            updatedDate: null,
            createdByUserId: request.userId,
            updatedByUserId: null,
            description: request.description,
            status: TaskStatus.Done,
            parentTaskId: null,
          }),
      });
      const addTask = new AddTaskUseCase(mockedTaskRepository);

      // act
      const response: AddTaskUseCaseResponse = await addTask.execute(request);

      // assert
      expect(response).toMatchObject({
        id: 1,
        description: request.description,
        status: TaskStatus.Done,
        parentTaskId: null,
      });
    });
  });
});
