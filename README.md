<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Angular & .NET Core Project</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            line-height: 1.6;
            background-color: #f8f9fa;
            color: #333;
        }
        h1, h2, h3 {
            color: #007bff;
        }
        .section {
            margin-bottom: 30px;
            padding: 20px;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        }
        code {
            background-color: #e9ecef;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 1em;
            color: #d63384;
        }
        pre {
            background: #e9ecef;
            padding: 15px;
            border-radius: 8px;
            overflow: auto;
            color: #333;
        }
        ul {
            margin: 0;
            padding: 0 20px;
        }
        a {
            color: #007bff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .highlight {
            background: #eaf4fc;
            padding: 10px;
            border-radius: 8px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <h1>Project Documentation</h1>

    <div class="section">
        <h2>About This Project</h2>
        <p>This is a full-stack project combining an <strong>Angular frontend</strong> and a <strong>.NET Core backend</strong>. It manages events with user registrations, focusing on business rules like capacity limits, user permissions, and registrations per user.</p>
    </div>

    <div class="section">
        <h2>Frontend: Angular</h2>
        <h3>Configuration</h3>
        <p>The frontend connects to the backend via an API. Make sure the <code>rootUrl</code> in the configuration file points to the backend server.</p>
        <pre><code>export class ApiConfiguration {
  rootUrl: string = 'http://localhost:5211';
}</code></pre>

        <h3>Commands to Run the Frontend</h3>
        <ul>
            <li><code>npm install</code>: Install project dependencies.</li>
            <li><code>ng serve</code>: Start the Angular development server.</li>
            <li>Visit <a href="http://localhost:4200" target="_blank">http://localhost:4200</a> in your browser.</li>
        </ul>

        <h3>Features</h3>
        <ul>
            <li>List all events with registration counts.</li>
            <li>View registration status for the logged-in user.</li>
            <li>Register for events if not already registered and within capacity.</li>
            <li>Clean design for usability and accessibility.</li>
        </ul>
    </div>

    <div class="section">
        <h2>Backend: .NET Core</h2>
        <h3>Configuration</h3>
        <p>The backend is built with .NET Core and uses Entity Framework Core for database operations. It runs over <strong>HTTP</strong> for local development.</p>
        <pre><code>builder.WebHost.UseUrls("http://localhost:5211");</code></pre>

        <h3>Commands to Run the Backend</h3>
        <ul>
            <li><code>dotnet restore</code>: Restore project dependencies.</li>
            <li><code>dotnet build</code>: Build the project.</li>
            <li><code>dotnet run</code>: Start the backend server.</li>
            <li>API documentation is available at <a href="http://localhost:5211/swagger" target="_blank">http://localhost:5211/swagger</a>.</li>
        </ul>

        <h3>Database Management</h3>
        <ul>
            <li>Run migrations: <code>dotnet ef database update</code></li>
            <li>Generate migrations: <code>dotnet ef migrations add MigrationName</code></li>
        </ul>
    </div>

    <div class="section">
        <h2>Project Structure</h2>
        <h3>Frontend</h3>
        <ul>
            <li><strong>src/app</strong>: Contains components, services, and modules for Angular.</li>
            <li><strong>environments</strong>: Configuration files for different environments (e.g., dev, prod).</li>
        </ul>

        <h3>Backend</h3>
        <ul>
            <li><strong>Controllers</strong>: Define API endpoints.</li>
            <li><strong>Services</strong>: Contain business logic.</li>
            <li><strong>Repositories</strong>: Handle database interactions via Entity Framework.</li>
            <li><strong>Models</strong>: Define database entities.</li>
        </ul>
    </div>

    <div class="section">
        <h2>Key Features</h2>
        <h3>Frontend</h3>
        <ul>
            <li>Dynamic interaction with API for event and registration management.</li>
            <li>Responsive design for multiple devices.</li>
        </ul>

        <h3>Backend</h3>
        <ul>
            <li>Efficient business logic with Unit of Work and Repository patterns.</li>
            <li>Validation of business rules (e.g., max capacity, unique registrations).</li>
            <li>Comprehensive API documentation via Swagger.</li>
        </ul>
    </div>

    <div class="section">
        <h2>Endpoints</h2>
        <h3>Key API Endpoints</h3>
        <div class="highlight">
            <strong>GET</strong> /api/Events/list<br>
            List all events.
        </div>
        <div class="highlight">
            <strong>POST</strong> /api/Events/create?userId={userId}<br>
            Create a new event.
        </div>
        <div class="highlight">
            <strong>POST</strong> /api/Events/{eventId}/register?userId={userId}<br>
            Register a user for an event.
        </div>
        <div class="highlight">
            <strong>DELETE</strong> /api/Events/{eventId}?userId={userId}<br>
            Delete an event if no registrations exist.
        </div>
    </div>

    <div class="section">
        <h2>Notes</h2>
        <ul>
            <li>Ensure the backend runs on HTTP and matches the <code>rootUrl</code> in the Angular configuration.</li>
            <li>Use Swagger to explore and test API endpoints.</li>
            <li>For any issues, check logs in the browser console (frontend) or terminal (backend).</li>
        </ul>
    </div>
</body>
</html>
