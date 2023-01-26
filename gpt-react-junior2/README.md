Create a simple React application that displays a list of items, each with a title, a description, and an image. The items should be fetched
from a JSON file and displayed using a component. The component should also have a button that, when clicked, will toggle the description of
the item to be visible or hidden.

Here are the steps you could take to solve this problem:

Create a new React application using create-react-app
Create a component that will display each item in the list
Use fetch or axios to retrieve the JSON data and store it in the component's state
Use map to iterate over the items and display them in the component
Add a button to each item that, when clicked, will toggle the visibility of the item's description
Make sure that the component is properly styled, so the items are displayed in a clear and organized way
Make sure to test your component with different data

As a suggestion, you could consider to use useEffect hook to handle the loading of data and also consider using useState hook to handle the
toggle of the description visibility.
