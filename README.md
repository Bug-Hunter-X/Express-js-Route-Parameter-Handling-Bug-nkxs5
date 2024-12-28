# Express.js Route Parameter Handling Bug

This repository demonstrates a common bug in Express.js route parameter handling and its solution.

## Bug Description
The provided Express.js route handler doesn't adequately handle cases where the `:id` parameter is missing or isn't a valid number. This can lead to unexpected behavior, such as database errors or incorrect responses.

## Bug Reproduction
1. Clone this repository.
2. Run `npm install`.
3. Start the server using `node bug.js`.
4. Try accessing the route with a non-numeric ID or without an ID: `/users/abc` or `/users`

## Solution
The solution involves validating the route parameter before using it in database queries.  This prevents errors and provides more robust error handling.