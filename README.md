
# Delaton: Collaborative Task Manager

This flow combines a mini-app interface with Telegram bot commands for task management within groups, allowing Task Managers to create, assign, and track tasks, while Regular Members can view, complete, and stay informed about assigned tasks.

## User Roles:

- **Task Manager**: Authorized users (pre-defined or designated) with full access to create, assign, and manage tasks.
- **Regular Member**: Default role for other group members. They can view assigned tasks, track progress, and mark them complete.

## Technology Stack:

- **Platform**: Telegram Mini App
- **Frontend**: Javascript framework (React/Vue.js)
- **Backend**: Tact smart contract on TON blockchain
- **Authorization**: Telegram wallet Login

## Features:

### Task Creation (Mini-App):

- Task Managers access the mini-app interface within the Telegram group chat.
- They can create tasks with title, description, deadline, and assignee selection from a list of group members.

### Task Assignment (Hybrid):

- Task Managers can assign tasks using:
  - Mini-app interface: During task creation, they choose the assignee from the member list.
  - Bot commands within the chat: Use "/assign_task [task_id] [@username]" where:
    - `[task_id]`: Unique identifier for the task (obtained from the mini-app).
    - `[@username]`: Username of the assignee (Task Manager or Regular Member).
- The system verifies the Task Manager's authority and identifies the assignee.

### Task Tracking (Mini-App & Chat):

- All members can view a task list within the mini-app.
- The list displays task details like title, assigned user, deadline, and progress status (To Do, In Progress, Completed).
- Task Managers can monitor all tasks.
- Regular Members can see their assigned tasks.

### Task Completion (Mini-App):

- Users can mark assigned tasks as completed within the mini-app interface.
- Marking completion updates the task status and might trigger notifications for Task Managers (optional).

## User Flow:

### Task Creation:

1. A Task Manager accesses the mini-app interface within the group chat.
2. They create a new task, specifying title, description (optional), deadline, and selecting an assignee from the member list (including other Task Managers and Regular Members).

### Task Assignment (Optional):

- Alternatively, a Task Manager can use the "/assign_task" command within the chat.

### Task Processing:

- The mini-app or bot verifies the Task Manager's authority and retrieves task details based on the provided ID.
- It identifies the mentioned user by their username.

### Assigning to Task Managers/Regular Members:

- The task is assigned to the designated user (Task Manager or Regular Member).
- The assignee receives a notification within the chat (optional).

### Task Management:

- Task Managers can manage all tasks (created by themselves or others) through the mini-app.
- Regular Members can view their assigned tasks within the mini-app, track progress, and mark them complete.

### Task Completion:

- A user (Task Manager or Regular Member) opens the mini-app and marks their assigned task as complete.
- The task status is updated in the smart contract.

## Benefits:

- **Flexibility**: Task Managers can choose between the mini-app for detailed task creation or quick bot commands for assignment.
- **Improved Delegation**: Clear assignment of tasks to both Task Managers and Regular Members.
- **Enhanced Visibility**: All group members can track task progress through the mini-app list.
- **Streamlined Workflow**: Keeps task management within the familiar Telegram app.

## Limitations:

- Requires development effort for the mini-app and bot integration.
- Relies on Telegram's TWA functionalities and bot API limitations.

## Additional Considerations:

- Implement clear communication guidelines within the group regarding user roles and task assignment procedures.
- Consider a confirmation step for bot commands to avoid accidental assignments.
- Explore functionalities like search/filter within the task list and comment sections for discussions.

---

## Mini App UI

The mini-app interface should be designed for ease of use within the Telegram chat environment. Here's a breakdown of potential elements:

### 1. Top Bar:

- **Group Name**: Displays the name of the Telegram group for context.
- **Task Manager Button** (Optional): If applicable, a button could identify the logged-in user as a Task Manager.

### 2. Navigation Bar:

- **Tasks**: This is the default view, displaying a list of all tasks in the group.
- **Create Task**: Clicking this button opens a form for creating a new task.

### 3. Task List (Default View):

- **List of Tasks**: Each task should be represented as a card with the following details:
  - **Title**: The main title of the task.
  - **Assignee**: Username of the assigned user (with a visual indicator for Task Managers if applicable).
  - **Deadline**: Due date and time for the task (consider color-coding based on urgency).
  - **Progress Indicator**: Visual representation of the task's status (e.g., "To Do", "In Progress", "Completed").
- **Search Bar** (Optional): Allows filtering tasks by title, assignee, or status.
- **Sort Options** (Optional): Users can sort the task list by deadline, assignee, or creation date.

### 4. Create Task Form:

- **Title**: Input field for entering the task title.
- **Description** (Optional): Text box for adding a detailed description.
- **Deadline Picker**: A calendar component or relative time selection option for setting the deadline.
- **Assignee Dropdown** (Task Managers Only): A dropdown menu listing all group members (including other Task Managers) for selecting the assignee. This element might be hidden for Regular Members.
- **Create Task Button**: Confirms the creation of the new task.

## User Flow:

### Accessing the Mini-App:

- Users click on the mini-app icon within the Telegram group chat.

### Viewing Tasks (Default):

- The mini-app displays a list of all tasks in the group by default.
- Users can view basic information about each task (title, assignee, deadline, progress).
- They can utilize the search and sort options (if implemented) to filter and organize the list for better viewing.

### Creating a Task (Task Managers):

- Task Managers click the "Create Task" button.
- They fill out the form, entering the title, optional description, deadline, and selecting an assignee from the list (if applicable).
- Clicking the "Create Task" button submits the new task to the smart contract and updates the task list.

### Marking Task Complete:

- Users can click on a specific task within the list.
- The task details might expand to show a "Mark Complete" button (or similar action).
- Clicking this button updates the task status in the smart contract and reflects the change in the list.

## Additional Interactions:

- Consider options for viewing detailed task information (including description) by clicking on individual tasks.
- Explore implementing comment sections within tasks for discussions between assigned users and Task Managers.

## Visual Design Considerations:

- Maintain a clean and user-friendly interface that integrates seamlessly with the Telegram chat environment.
- Utilize clear icons and visual cues for task progress, assignee roles (if applicable), and deadlines (consider color-coding for urgency).
- Ensure responsiveness for different screen sizes used within Telegram.



This design approach focuses on providing a clear overview of tasks, a streamlined creation process for Task Managers, and easy interaction for all group members to view and manage their assigned tasks. Remember to adapt and enhance the UI based on user feedback and specific project needs.

---
