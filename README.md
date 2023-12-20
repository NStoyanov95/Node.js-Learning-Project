<h1>Node.js Learning Project</h1>

This project is a simple Node.js application created for learning purposes. It utilizes basic routing to handle different HTTP requests and serves as an introduction to handling static files, parsing data, and working with JSON files.


<h2>Project Structure</h2>

<ul>
    <li><strong>handlers</strong>: Contains individual request handlers for different routes.
        <ul>
            <li><strong>cat.js</strong>: Handles requests related to cats.</li>
            <li><strong>home.js</strong>: Manages the home route.</li>
            <li><strong>static-files.js</strong>: Handles static files.</li>
        </ul>
    </li>
    <li><strong>data</strong>: Holds JSON files acting as a simple database.
        <ul>
            <li><strong>breeds.json</strong>: Stores cat breeds.</li>
            <li><strong>cats.json</strong>: Stores information about cats.</li>
        </ul>
    </li>
    <li><strong>views</strong>: Contains HTML files for rendering views.
        <ul>
            <li><strong>addCat.html</strong>: Form for adding a new cat.</li>
            <li><strong>addBreed.html</strong>: Form for adding a new cat breed.</li>
            <li><strong>home/index.html</strong>: Home page template.</li>
        </ul>
    </li>
    <li><strong>app.js</strong>: Main application file combining all handlers and starting the server.</li>
</ul>

<ol>
    <li>Install dependencies: <code>npm install</code></li>
    <li>Run the application: <code>npm start</code></li>
</ol>

<p>Visit <a href="http://localhost:3000">http://localhost:3000</a> to access the application.</p>

<h2>Learning Objectives</h2>

<ul>
    <li>Routing in Node.js</li>
    <li>Handling static files</li>
    <li>Parsing form data</li>
    <li>Reading and writing JSON files</li>
</ul>
