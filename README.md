# 📚 The BookBark

The BookBark is a web application that allows users to search for books, view book details, and join book clubs to discuss their favorite books with like-minded readers. Unlike traditional book clubs where users must read pre-selected books, this platform enables users to join clubs based on the books they are already reading.

📖 **Problem:**  
Book lovers often struggle to find communities discussing the books they are currently reading. Many book clubs follow predefined reading lists, which may not always align with individual interests.  
✨ **Solution:**  
The BookBark provides a solution by allowing users to join discussions based on books they choose to read.

---

## **Features**

- **User Authentication:** Users can sign up and log in to access personalized features.
- **Book Search:** Users can search for books by title or author.
- **Book Details Page:** Displays book information including description, ratings, and reviews.
- **Book Club Membership:** Users can join a book club for a specific book.
- **Discussion Board:** Users can leave comments, share insights, and discuss books in their respective clubs.
- **Genre Filtering:** Users can filter books by historical, fiction, and fantasy genres.
- **Quote of the Day:** Displays a daily quote from famous writers.
- **Best Books of 2024 & Recommendations for 2025:** A manually curated list of top books.

---

## **Tech Stack**

### Frontend:

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Material UI](https://img.shields.io/badge/Material_UI-0081CB?style=for-the-badge&logo=mui&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### Backend:

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

---

## **APIs**

- **Google Books API:** For book search & details.
- **Quotes API:** For daily quotes.
- **Custom JSON File:** For best books of 2024 & recommendations for 2025.

---

## **API Endpoints**

| **Method** | **Endpoint**                      | **Description**                     |
| ---------- | --------------------------------- | ----------------------------------- |
| `GET`      | `/api/books`                      | Fetches all books                   |
| `GET`      | `/api/books/best-books`           | Fetches best books of 2024          |
| `GET`      | `/api/book-clubs/:title`          | Fetches book clubs by book title    |
| `POST`     | `/api/book-clubs/:title/comments` | Adds a new comment to the book club |

---

## **Prerequisites**

- **Node.js:** [Download & Install](https://nodejs.org/)
- **MySQL:** Make sure MySQL is running and properly configured.

---

## **Installation & Setup**

### 1. **Clone the Repository:**

```bash
git clone https://github.com/almanursultan/the-bookmark.git
cd the-bookmark-capstone
npm install
node server.js
```
