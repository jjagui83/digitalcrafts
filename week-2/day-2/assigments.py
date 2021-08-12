





# class :

#     def __init__(self, street, city, state, zip_code):
#         self.street = street
#         self.city = city
#         self.state = state
#         self.zip_code = zip_code

#     def add_address(self, address):
#         self.add_address = [address]

#     def display_addresses(self):
#         self.display_addresses = ["self.street" + "self.add_address"]
 





# david = Person("Myric", "Somerset", "California", "95684")
# david.add_address("Placerville, CA")
# david.display_addresses()
# print(david.street)
# print(david.city)
# print(david.add_address)


# class Table:
#     def __init__(self):
#         self.height =
#         self.material =
#         self.seats =
#         self.color =


# class Rectangular(Table):

myDict = []
class Grocery_List:
    def __init__(self, store):
        self.store = store
    def __eq__(self, another):
        return hasattr(another, 'store') and self.store == another.store
    def __hash__(self):
        return hash(self.store)
    def __repr__(self):
        return ("%s" % self.store)
def welcomeMessage():
    message = """
    Welcome to your shopping list directory.
    1. Add a list
    2. Add an item to a list
    3. View a list
    4. Press q to quit
    """
    return print(message)

def makingAList():
    listToAdd = []
    userInput = input("What do you want to call your new list? ")
    listInput = Grocery_List(userInput)
    listToAdd.append(listInput)
    addAnItem = input("What item do you want to add? ")
    listToAdd.append(addAnItem)
    myDict.append(listToAdd)

def addItemtoList():
    for store in myDict:
        print(store)
    userInput = int(input("What list do you want to add to? "))
    itemToAdd = input("What do you want to add? ")
    myDict[userInput].append(itemToAdd)


choice = ""
while(choice != "q"):
    welcomeMessage()
    userChoice = input("What do you want to do? ")
    if userChoice == "1":
        makingAList()
    if userChoice == "2":
        addItemtoList()
    if userChoice == "3":
        for store in myDict:
            print(store)
    if userChoice == "q":
        print("Thanks for accessing your lists.")
        break

print(myDict)





