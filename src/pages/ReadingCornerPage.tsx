"use client"

import { useEffect } from "react"
import Book from "../components/Book"
import "../styles/reading.css"

// Sample book data - replace with your actual books
const classicsBooks = [
  {
    id: 1,
    image: "/assets/book1.png",
    title: "Pride and Prejudice",
    description: "Jane Austen's masterpiece about love and social standing.",
  },
  {
    id: 2,
    image: "/assets/book2.png",
    title: "To Kill a Mockingbird",
    description: "Harper Lee's classic about racial injustice.",
  },
]

const fictionBooks = [
  {
    id: 1,
    image: "/assets/book3.png",
    title: "The Night Circus",
    description: "Erin Morgenstern's magical competition between two illusionists.",
  },
  {
    id: 2,
    image: "/assets/book4.png",
    title: "The Kite Runner",
    description: "Khaled Hosseini's story of friendship, betrayal, and redemption.",
  },
  {
    id: 3,
    image: "/assets/book5.png",
    title: "The Alchemist",
    description: "Paulo Coelho's tale about following your dreams.",
  },
]

const nonFictionBooks = [
  {
    id: 1,
    image: "/assets/book6.png",
    title: "Sapiens",
    description: "Yuval Noah Harari's brief history of humankind.",
  },
  {
    id: 2,
    image: "/assets/book7.png",
    title: "Educated",
    description: "Tara Westover's memoir about her journey from isolation to education.",
  },
]

// Favorite books list
const favoriteBooks = [
  "Les Misérables by Victor Hugo",
  "The Count of Monte Cristo by Alexandre Dumas",
  "The Book Thief by Markus Zusak",
  "The Shadow of the Wind by Carlos Ruiz Zafón",
  "A Little Life by Hanya Yanagihara",
  "The Secret History by Donna Tartt",
  "Never Let Me Go by Kazuo Ishiguro",
  "The Name of the Wind by Patrick Rothfuss",
  "The Night Circus by Erin Morgenstern",
  "The Song of Achilles by Madeline Miller",
]

const ReadingCornerPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="reading-page">
      {/* Banner Section */}
      <div className="reading-banner-container">
        <div className="reading-banner">
          <h1>Welcome to my Reading Corner!</h1>
          <p>Here are the worlds I've been visiting recently...</p>

          {/* Banner Decorations - Replace with your actual images */}
          <img
            src="/assets/lights.png"
            alt="String lights"
            className="banner-decoration banner-lights"
          />
          <img src="/assets/rocks.png" alt="Rocks" className="banner-decoration banner-rocks" />
          <img
            src="/assets/mushroom.png"
            alt="Mushrooms"
            className="banner-decoration banner-mushrooms"
          />
        </div>
      </div>

      {/* Bookshelf Section */}
      <div className="bookshelf-container">
       {/* Single bookshelf image */}
	   <img src="/assets/bookshelf.png" alt="Bookshelf" className="bookshelf-image" />

		{/* Genre labels */}
		<div className="shelf-label label-top">CLASSICS</div>
		<div className="shelf-label label-middle">FICTION</div>
		<div className="shelf-label label-bottom">NON-FICTION</div>

		 {/* Books positioned with percentage-based positioning */}
		 <div className="shelf shelf-top">
          {classicsBooks.map((book, index) => (
            <Book
              key={book.id}
              image={book.image}
              title={book.title}
              description={book.description}
              index={index}
              totalBooks={classicsBooks.length}
            />
          ))}
        </div>

        {/* Middle shelf books */}
        <div className="shelf shelf-middle">
          {fictionBooks.map((book, index) => (
            <Book
              key={book.id}
              image={book.image}
              title={book.title}
              description={book.description}
              index={index}
              totalBooks={fictionBooks.length}
            />
          ))}
        </div>

        {/* Bottom shelf books */}
        <div className="shelf shelf-bottom">
          {nonFictionBooks.map((book, index) => (
            <Book
              key={book.id}
              image={book.image}
              title={book.title}
              description={book.description}
              index={index}
              totalBooks={nonFictionBooks.length}
            />
          ))}
        </div>
      </div>
      {/* Favorites Section */}
      <div className="favorites-container">
        <div className="favorites-list">
          <h2>My All-time Favourites</h2>
          <ol>
            {favoriteBooks.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ol>
        </div>

        <div className="reading-furniture">
          {/* Replace with your actual furniture images */}
          <img
            src="/assets/bookshelf2.png"
            alt="Bookshelf"
            className="furniture-item furniture-bookshelf"
          />
          <img
            src="/assets/beanbag.png"
            alt="Bean bag"
            className="furniture-item furniture-beanbag"
          />
          <img src="/assets/carpet.png" alt="Rug" className="furniture-item furniture-rug" />
          <img src="/assets/plant.png" alt="Plant" className="furniture-item furniture-plant" />
          <img src="/assets/lamp.png" alt="Lamp" className="furniture-item furniture-lamp" />
        </div>
      </div>
    </div>
  )
}

export default ReadingCornerPage
