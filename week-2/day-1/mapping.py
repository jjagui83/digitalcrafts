# # friend info = {
# #     "Name" : "Alan Turing",
# #     "Cell" : 
# # }

# ramit = {
#     "name" : "Rammit",
#     "email" : "ramit@global.com",
#     "interests" : ["movies", "tennis"],
#     "friends" : [
#         {
#             "name" : "Jasmine",
#             "email" : "jasmine@yahoo.com",
#             "interest" : ["photography" , 'tennis']

#         },
#         {
#             'name' : 'Jan',
#             'email' : 'jan@hotmail.com',
#             'interests' : ["movies", "tv"]
#         }
#     ],
#     "friends_count" : 2 
# }

# # print(ramit["email"])
# # print(ramit["interests"][0])
# # print(ramit["friends"][0]["email"])
# # print(ramit["friends"][1]["interests"][1])

superhero = {
    "name": "Wonder Woman",
    "alias": "Diana Prince",
    "gear": [
        "Lasso of Truth",
        "Bracelets of Submission"
    ],
    "vehicle": {
        "title": "Invisible Jet",
        "speed": "2000 mph",
    }
}

for item in superhero["gear"]:
    print("%s has %s" % (superhero["name"], item))

file_name = "mapping.py"
with open(file_name, "r") as file_handle:
    contents = file_handle.read()
    print(contents)