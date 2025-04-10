import Book from "./Book"

interface BookData {
  id: number
  image: string
  title: string
  description: string
}

interface BookshelfProps {
  shelfImage: string
  label: string
  books: BookData[]
}

const Bookshelf = ({ shelfImage, label, books }: BookshelfProps) => {
  return (
    <div className="shelf">
      <img src={shelfImage || "/placeholder.svg"} alt={`${label} shelf`} className="shelf-image" />
      <div className="shelf-label">{label}</div>
      <div className="books">
        {books.map((book, index) => (
          <Book 
		  	key={book.id}
			image={book.image} 
			title={book.title} 
			description={book.description} 
			index={index}
            totalBooks={books.length}/>
        ))}
      </div>
    </div>
  )
}

export default Bookshelf
