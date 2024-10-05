# Password Generator

This is a simple **Password Generator** built using **React**. The app allows users to generate a random password based on certain criteria such as password length, inclusion of numbers, and special characters. Users can also copy the generated password to the clipboard with a single click.

## Features

- Random password generation
- Adjustable password length (between 6 and 100 characters)
- Option to include/exclude numbers
- Option to include/exclude special characters (`@`, `!`, `#`, `$`, `%`, etc.)
- Copy password to clipboard functionality

## Tech Stack

- **React**: For building the user interface
- **Tailwind CSS**: For styling the application
- **JavaScript**: Logic for password generation

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/passwordgenerator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd passwordgenerator
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

1. Adjust the password length using the range slider.
2. Toggle the checkboxes to include numbers and special characters.
3. The generated password will appear in the input field.
4. Click the **Copy** button to copy the password to your clipboard.

## Code Overview

### `useState`

The app uses the `useState` hook to manage the state of:
- `length`: The desired length of the password.
- `numberallowed`: Boolean value indicating if numbers are allowed in the password.
- `charallowed`: Boolean value indicating if special characters are allowed in the password.
- `password`: The generated password.

### `useCallback`

The password generation logic is wrapped in the `passwordgenerator` function using `useCallback` to avoid unnecessary recalculations when dependencies (length, numberallowed, charallowed) change.

### `useEffect`

`useEffect` is used to trigger the password generation each time the user updates the password length, numberallowed, or charallowed options.

### `useRef`

A `useRef` hook is used to reference the password input field to enable copying the generated password to the clipboard.


## Contributing

Feel free to open issues or pull requests if you'd like to contribute!


---