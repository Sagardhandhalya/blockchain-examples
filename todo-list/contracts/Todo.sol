pragma solidity ^0.5.0;

contract Todo {
    uint256 public taskCount = 0;

    struct Task {
        uint256 id;
        string contant;
        bool completed;
    }
    mapping(uint256 => Task) public tasks;

    constructor() public {
        createTask("Won this hack");
    }

    function createTask(string memory _contant) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _contant, false);
    }

}
