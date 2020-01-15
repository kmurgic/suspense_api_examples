This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Concurrent Mode - Suspense API Examples

This project demonstrates how data fetching works with the new React Suspense API.


This code contains five examples of a Random Star Wars Character application.

### Example 1 - Fetch On Render
This example demonstrates the fetch on render pattern with a waterfall.  The application will wait for the name to load before fetching any other data.

### Example 2 - Fetch Then Render
This example demonstrates the fetch then render pattern.  The application will fetch all the data before showing any of the data.  This pattern does not allow you to display data as it loads.

### Example 3 - Suspense
This example demonstrates how we can use the Suspense component to fetch data while rendering.  While the data is being fetched a fallback spinner appears in place of every component being rendered.  In this example the data loads in a random order.  We can improve upon this using a SuspenseList.

### Example 4 - Suspense List
This example demonstrates how a SuspenseList component allows us to control the order in which things load on the page.  The SuspenseList will fetch data on render, but it will wait to display fetched data until it can be displayed in a logical order - in this case from top to bottom.

### Example 5 - useTransition
The final example demonstrates how the useTransition hook allows us to wait on the current page while trying to load a new page.  When the GET NEW CHARACTER button is first pressed, it switches to LOADING CHARACTER... and becomes disabled while it waits for the new page to load.  In this example the useTransition timeout is set to 1000ms, so if the new page takes more than 1 second to load, the application will transition to the new page and show a loading spinner on the new page until the data loads.  If the new page were to load in less than one second, the application would transition directly to the fully loaded new page.