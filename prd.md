# Product Requirements Document: Simple Next.js To-Do App

## 1. Project Overview
**Goal:** Build a single-page web application that allows a user to manage a simple list of tasks. 
**Purpose:** To learn the fundamentals of Next.js (App Router), TypeScript, database interactions (Supabase), and deployment (Vercel) through a minimal, functional project.

## 2. Tech Stack
* **Framework:** Next.js (using the App Router).
* **Language:** TypeScript (kept simple, mostly for basic data structuring).
* **Database:** Supabase (PostgreSQL).
* **Styling:** Tailwind CSS (comes default with Next.js, easy to style).
* **Hosting:** Vercel.
* **IDE:** Cursor.

## 3. Core Features (CRUD)
The app will consist of a single main page (`app/page.tsx`) that performs four basic actions:

* **Create (Add):** A text input field and an "Add" button. When submitted, the new task is saved to the database and appears in the list.
* **Read (View):** Upon loading the page, the app fetches all existing tasks from the database and displays them in a list, sorted by the time they were created.
* **Update (Complete):** Each task will have a checkbox next to it. Clicking the checkbox toggles the task's status between "active" and "completed" in the database.
* **Delete (Remove):** Each task will have a "Delete" (or "X") button. Clicking it removes the task entirely from the database and the screen.

## 4. Database Schema (Supabase)
We will create a single table in Supabase named `todos`. It only needs four simple columns:

| Column Name | Data Type | Description |
| :--- | :--- | :--- |
| `id` | UUID | A unique identifier generated automatically. |
| `title` | Text | The actual text of the user's to-do item. |
| `is_completed` | Boolean | `true` if done, `false` if active. Defaults to `false`. |
| `created_at` | Timestamp | Automatically records when the task was added. |

## 5. User Interface (UI) Requirements
Keep it clean, minimalistic, and centered on the screen.
* **Header:** A simple title like "My To-Do List".
* **Input Section:** A text input spanning the width of the container, with a prominent "Add" button next to it.
* **List Section:** * Tasks should be displayed as a vertical list below the input.
    * Completed tasks should visually change (e.g., the text gets a strikethrough or turns gray) to indicate they are done.

## 6. Out of Scope (What we are NOT doing)
To ensure the project remains simple and achievable:
* No User Authentication / Login (all tasks will be globally visible to anyone who visits the site).
* No routing to other pages (everything happens on the home page).
* No due dates, categories, or tags.
* No drag-and-drop reordering.