task={
    "title": [],
    "priority" : ["high", "medium", "low"]
}
toDo = []

def menu():
    print("[1] Add task")
    print("[2] Delete task")
    print("[3] View all taks")
    print("[4] Quit ")

menu()
option = int(input(" Enter your option:"))

while menu != 4:
    if option == 1:
        title = input("Enter your task: ")
        priority = input("Priority of task: high, medium, low: ")
        toDo.append([title, priority])

    if option == 2:
        title = input("Enter your task: ")
        priority == input("Enter the priority of the task: ")
        toDo.remove([title, priority])

    if option == 3:
        print(toDo)

    if option == 4:
        break 
    menu()
    option = int(input("Enter your option: "))

print(toDo)
