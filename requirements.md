# Domain Modeling/Software requirements:

### User story One

A bored house cat owner.
I’m a bored cat owner that wants to find playdates for my cat.
Shows the options for potential playmates for their cat, and the owner is given the option to select the best cat for the playdate. 
4.  Give the user the ability to meet new cat owners and for the cat, a way to meet and have new friends. 


### User story Two

1. Bored house cat looking for new experiences.
2. I’m a cat who is recently single and ready to mingle.
3. Presented with potential matches and I have the ability to say yes or no.  
I will also be able to see previous successful matches. 
4. Provide a user with a way to “socialize” and to meet new potential
purrtners. 

### User story Three

Bored people looking for cats online
I’m a semi retired single person with pet allergies.  I love felines, but my allergies will not allow me to get close to them.  This is a way for me to love felines from afar. 
3. Displays pictures of cats and lets the user engage with cats at a safe physical distance. 
4. Ending boredom for people with cat allergies. 

### User story four 

Rodents and house plants wanting to spy on cats to stay safe. 
We,  an aloe plant that is constantly losing my leaves because my roommate (a cat) decides they are really tasty and full of nutrition. We are also a rodent, who is constantly tormented by the house cat, I was here first and love cheese, but they are making my life hard. 
As users, we will be able to set our roommate up with a potential date, ad we will be able to get some relief from the torment that they make us withstand. 
With any luck, our room mate will meet someone to spend most of their time with, allowing us to be a bit more happy and healthy in our daily lives. 

### User story five 

Lonely house cat owner looking for other lonely house cat owners. 
I’m a mid 40’s house cat owner, who is interested in leveraging the cuteness of my cat to someone who would otherwise, not be interested in at all. 
As a user, I will be able to use my cat, and all of its amazing genes, to meet new and interesting people.  
Providing my cat with a new friend, while allowing myself, the user, to meet new people.  Perhaps even meet the right person, take to the movies, and dinner. 




#### What is the vision of this product?

To provide a cat matching service functionality. Much like Tin***, but with cats. 


#### What pain point does this project solve?

During these uncertain times, it’s especially hard for cats to socialize and meet new friends. Restrictions are hard on all of us, but especially for our furry friends.  This is a way for us to help them feel a bit more normal. 

#### Why should we care about your product?

For cat owners it provides an easy way to find other cats to play with, and potentially meet other human friends. 
For non cat owners, everyone loves looking at cat pictures and reading about their antics. 


### ##Scope - 
In - Randomly choose two cats to present and allow the user to choose whether or not those cats should match. 
	- The matches page will display all previous matches on the users local computer. 
	- (Stretch goals) - User is able to create a cat profile and is able to create matches with their created profile.
	- (Stretch goals) - The list of all of the cats that are currently listed and able to be matched. 

Out - No data analysis to determine which two cat profiles will be shown to be a potential match. 
	- All of the storage will be local storage and only stored on the users machine. 
	
### MVP 
- User has the ability to make cat matches, and have randomly generated sentences displayed with a story about the match. User input will be naming the match. Also, showing all of the previous matches, and their names. 

Stretch goals
	- User is able to create a cat profile and is able to create matches with their created profile.
	- The list of all of the cats that are currently listed and able to be matched. 

Functional Requirements:

A user has to name any match that they make. 
A user has the ability to choose whether or not the displayed cats match. 
The ability to scroll through all previous matches. 
  Stretch goals - the user will be able to browse as a user created profile and select matches. 
Stretch goals - The ability to scroll the all of the cat profiles that are in the system. 

Data flow:

Website will start up, load up all of the cat objects, randomly select two cat objects and then if the user selects un-match or match it will select two new cards.

If they select match, it will create a match object and write that to local storage.  It will then switch over to the matches page and show the most recent match to the top.

If they select un-match the user will be given two new options for potential matches, that are randomly generated from the cat objects. 

Stretch goal flow: 

Ask the user if they want to create a new profile, or use the pre-existing ones, and if they want to create a new profile, they will enter that information (form input).  That will then be written to local storage, and they will browse against the other profiles in the system as the profile they just created. 

The ability to scroll through all of the other cat profiles, which will be stored in local storage.  