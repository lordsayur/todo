import { describe, test, expect, vi, beforeAll, afterAll } from "vitest";
import { TaskStatus } from "../enums";
import { Task } from "./task";

describe("Task", () => {
  const mockedDate = new Date("2020-01-01");

  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(mockedDate);
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  test("Should add 'add metadata' and defaults value", () => {
    // arrange
    const id = 1;
    const userId = 1;
    const description = "Task";

    // act
    const task = new Task(id, userId, description);

    // assert
    expect(task).toMatchObject<Task>({
      id: id,
      createdDate: mockedDate,
      updatedDate: null,
      createdByUserId: userId,
      updatedByUserId: null,
      description: description,
      status: TaskStatus.ToDo,
      parentTaskId: null,
    });
  });
});
