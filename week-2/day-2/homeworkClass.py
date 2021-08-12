
class GroceryStoreList:
    def __init__(self, name, address):
        self.name = name
        self.address = address

class List:
    def __init__(self):
        self.contents = []


class Item:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity


userChoice = ""
storeNames = []
itemNames = []
while userChoice != "q":
    userChoice = input("""
    What choice would you like?\n
    [1.] Add a Store\n
    [2.] Add items to a store\n
    [3.] View items in list\n
    [4.] Press q to exit\n
    """)

    if userChoice == "1":
        storeName = input("What store would you like?: ")
        storeAddress = input("What is the store address: ")
        store = GroceryStoreList(storeName, storeAddress)
        print(f"{storeName} added at {storeAddress}")
        storeNames.append(store)

    if userChoice == "2":
        cart = List()
        itemName = input("What item would you like to add: ")
        itemPrice = input("What is the cost of the item: ")
        quantity = input("What is the quantity of the item?: ")
        itemAdded = Item(itemName, itemPrice, quantity)
        cart.contents.append(itemAdded)
        itemNames.append(cart)
    
    if userChoice == "3":
        for store in storeNames:
            for name in store.name:
                print(store.name)
                
        
        for cart in itemNames:
            
            for content in cart.contents:                
                print(content.name)
                print(content.price)
                print(content.quantity)
        


    

    if userChoice == "q":
        
        break
