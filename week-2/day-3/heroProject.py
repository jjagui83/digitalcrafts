import random
# Blueprint for Fighter class game
class Fighter:

    def __init__(self, attack_option):
        self.attack_option = attack_option
    
    
    
    def attack(self):  
        if self.attack_option == 1:
            attack_points = random.randint(12,19)
            return attack_points

        elif self.attack_option == 2:
            attack_points = random.randint(11,28)
            return attack_points
        else:
            print("What are you doing!? You lost your turn!")

    def heal(self):
        health_points = random.randint(12,19)
        return health_points


kaveh_health = 100
mrithun_health= 100
roundContinue = True

while roundContinue == True:
    print("\nATTACK OPTIONS\n 1.Punch \n 2.Kick\n 3. Heal")
    attack_option = eval(input("\n*** Select an option:*** "))

    if mrithun_health== 100:
        mrithun_option = random.randint(1,2)

    else:
        mrithun_option = random.randint(1,3)

    mrithun = Fighter(mrithun_option)
    kaveh_fighter = Fighter(attack_option)
    #############################################
    if attack_option == 1 or attack_option == 2:
        damage_to_mrithun = kaveh_fighter.attack()
        heal_self = 0
        print("Kaveh dealt",damage_to_mrithun,"damage.")

    if mrithun_option == 1 or mrithun_option == 2:
        damage_to_kaveh = mrithun.attack()
        heal_mrithun = 0
        print("Mrithun inflicted", damage_to_kaveh, "damage")


    if attack_option == 3:
        heal_self = kaveh_fighter.heal()
        damage_to_mrithun = 0
        print("You healed",heal_self,"health points")
        

    if mrithun_option == 3:
        heal_mrithun = mrithun.heal()
        damage_to_kaveh = 0
        print("mrithun healed",heal_self,"health points")

    kaveh_health = kaveh_health - damage_to_kaveh + heal_self

    mrithun_health= heal_mrithun - damage_to_mrithun + heal_mrithun

    # if kaveh_health <= 0:
    #     exit()
    # elif mrithun_health <= 0:
    #     exit()
    if kaveh_health > 100:
        kevehHealth = 100

    elif kaveh_health <= 0:
        kaveh_health = 0
        roundContinue = False

    if mrithun_health > 100:
        mrithun_health= 100
        # roundContinue = False
        

    elif mrithun_health<= 100:
        mrithun_health= 0
        # roundContinue = False

    print("Your current health is", kaveh_health)
    print("mrithun's current health is", mrithun_health)

print("Keveh's final health is", kaveh_health)
print("mrithun's final health is", mrithun_health)

if kaveh_health < mrithun_health:
    print("You lost! Try again?")

else:
    print("Keveh won against Mrithun!")



    





