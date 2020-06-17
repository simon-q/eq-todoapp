fetch("api/v1/tasks")
  .then(response => response.json())
  .then(data => document.body.append(`data: ${JSON.stringify(data)}`));