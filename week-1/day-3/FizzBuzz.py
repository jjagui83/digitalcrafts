# If input is divisible by 3 then print Fizz
# If input is divisible by 5 then print Buzz
# If input is divisible by 3 and 5 then print Fizz Buzz


number = int(input("What is your number?"))

if (number % 3 == 0 and number % 5 == 0):
    print("FizzBuzz")

elif number % 3 == 0:
    print("Fizz")

elif number % 5 == 0:
    print("Buzz")


