The project contains an implementation of an autocompletion feature.
The project will fetch data from a mock json of people by their names and complete the rest of matching people after having typed a character. 
Settings and features:
- mock list in json format consists of 1000 people, including f.ex their id, name, surname, email etc.
- while typing, the list of people is filtered in order to match the typed characters
- searching is case-insensitive
- the displayed number of propositions is limited to 8
- there can be multiple names, that's why when hovered over, a surname is added to display

AutoCompleter has following props:
- searchData - an array of objects. The object must contain the following keys: id
- searchFor - a key, type string, which will be a search string
- inputValue - the typed characters (usually from components state)
- handleItemSelect - a function taking id as an argument
- searchForMore - another key, type string, which will be a additionally displayed
- displayMoreInfo - a function taking id as an argument
- moreInfo - a string value to be displayed (usually from components state)

Demo: https://rafalmiler77.github.io/autocompletion/
