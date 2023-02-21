import { describe, test, expect, beforeAll, vi, afterAll } from "vitest";
import { Task, TaskStatus } from "@todo/entities";

import { InMemoryTaskRepository } from "./in-memory-task-repository";

describe("InMemoryTaskRepository", () => {
  let mockedDate: Date = new Date("2020-01-01");

  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(mockedDate);
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  describe("Add", () => {
    test("Should add task with assigned Id and return task", () => {
      // arrange
      const tasks: Task[] = [];
      const repository = new InMemoryTaskRepository(tasks);
      const description = "New Task";
      const userId = 1;

      // act
      const addedTask = repository.add(userId, description) as Task;

      // assert
      expect(tasks).toHaveLength(1);
      expect(addedTask).toMatchObject<Task>({
        id: 1,
        createdDate: mockedDate,
        createdByUserId: userId,
        updatedByUserId: null,
        updatedDate: null,
        description: description,
        status: TaskStatus.ToDo,
        parentTaskId: null,
      });
    });
  });
});
