# Student-Enrollment-Form
The student enrollment form is a web-based application using JSONPowerDB for efficient management of student records, includes fields for roll number, full name, class, date of birth, address, and date of enrollment. It uses JavaScript and jQuery for client-side scripting and communicates with a backend API to store and retrieve student data.

![Screenshot (2)](https://github.com/user-attachments/assets/25853e13-ae76-4558-8c9f-381f63db3cfd)

## Features

- Add new student records
- Retrieve and display student records based on roll number
- Update existing student records
- Reset the form for new data entry

## Technologies Used

- HTML
- CSS (Bootstrap)
- JavaScript (jQuery)
- [login2explore](http://login2explore.com/jpdb/resources/js/0.0.3/jpdb-commons.js) for backend API

## Usage

1. Enter the student's roll number in the "Roll Number" field.
2. Click on the form fields to enter the student's full name, class, date of birth, address, and date of enrollment.
3. Click the "Save" button to add a new student record.
4. To retrieve an existing student record, enter the roll number and click outside the field or press Enter. The form will be populated with the student's information.
5. To update the student record, modify the necessary fields and click the "Update" button.
6. Click the "Reset" button to clear the form fields.

## JavaScript Functions

### `saveRecNo2LS(jsonObj)`

Saves the record number from the JSON object into local storage.

### `getstdRollAsJsonObj()`

Returns the roll number as a JSON string.

### `fillData(jsonObj)`

Fills the form fields with data from the JSON object.

### `resetForm()`

Resets the form fields to their initial state and sets focus on the roll number input.

### `validateAndGetFormData()`

Validates the form inputs and returns the form data as a JSON string. If validation fails, returns an empty string.

### `getStd()`

Retrieves student data based on the roll number and populates the form if the student exists.

### `saveData()`

Saves new student data to the database.

### `updateData()`

Updates existing student data in the database.

![Screenshot (3)](https://github.com/user-attachments/assets/9772210b-3fc2-46d7-91d6-df4ff25f7bfe)


## API Configuration

The API configuration is set up using the following variables:

var jpdbBaseURL = "http://api.login2explore.com:5577";

var jpdbIRL = "/api/irl";

var jpdbIML = "/api/iml";

var stdDBName = "SCHOOL-DB";

var stdRelName = "STUDENT-TABLE";






