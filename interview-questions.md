# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: the foreign key would be called cohort_id and added to the student table. Then you rails db:migrate to add a column to the table.

Researched answer:

2. Which RESTful routes must always be passed params? Why?

Your answer: Post, put, patch, and delete are routes that must always be passed parameters. Post need parameters to make the entry into the database and put, patch, and delete need at least the id of the data being updated.

Researched answer: There is no RESTful route that always requires parameters to be passed. However, certain routes may require parameters based on the specific functionality that they provide. Routes used for searching, filtering, and routing to a specific instance typically require a params.

3. Name three rails generator commands. What is created by each?

Your answer: rails generate model - this will create a new model datatypes.
rails generate controller - this will create a new controller that will give us to perform the CRUD actions on the model.
rails generate migration - this creates a new migration of the original data which can later be modify or updated.

Researched answer: rails resource - does everything Model command does, but also creates a controller, empty views folder, and resource routes., rails scaffold - it creates and completes the model, controller, and all the views needed for restful routing and full crud functionality.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
index, this will get all the data from student table.
action: "POST" location: /students
create, this will add new data to the database
action: "GET" location: /students/new
new, this is a form for new data.
action: "GET" location: /students/2
show, this calls a specific data from the database
action: "GET" location: /students/2/edit
edit, this will edit the data from the database
action: "PATCH" location: /students/2
update, this will modify or change data in the database
action: "DELETE" location: /students/2
destroy, this removes the data from the database

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user, I can see a landing page with a title.

As a user, I can create an account with username and password.

As a user, I can click on add new task button to create a new list.

As a user, I can type and input tasks into the list.

As a user, I can add more tasks.

As a user, I can modify or update tasks.

As a user, I can delete tasks.

As a user, I can submit and save tasks.

As a user, I cannot submit a blank task list.

As a user, once task has been submitted I am redirected to the homepage with pop up confirmation.

