"use client"

import { useState, useRef, useEffect } from "react"

interface BookProps {
  image: string
  title: string
  description: string
  alt?: string
  index?: number
  totalBooks?: number
}

const Book = ({ image, title, description, alt = "Book stack", index = 0, totalBooks = 7 }: BookProps) => {
	const [showInfo, setShowInfo] = useState(false)
	const bookRef = useRef<HTMLDivElement>(null)
	const popupRef = useRef<HTMLDivElement>(null)
  
	// Adjust popup position to ensure it stays within viewport
	useEffect(() => {
	  if (showInfo && popupRef.current && bookRef.current) {
		const popup = popupRef.current
		const book = bookRef.current
		const bookRect = book.getBoundingClientRect()
		const popupRect = popup.getBoundingClientRect()
  
		// Check if popup would go off-screen to the left
		if (bookRect.left + bookRect.width / 2 - popupRect.width / 2 < 0) {
		  popup.style.left = "0"
		  popup.style.transform = "none"
		}
		// Check if popup would go off-screen to the right
		else if (bookRect.left + bookRect.width / 2 + popupRect.width / 2 > window.innerWidth) {
		  popup.style.left = "auto"
		  popup.style.right = "0"
		  popup.style.transform = "none"
		}
		// Default centered position
		else {
		  popup.style.left = "50%"
		  popup.style.right = "auto"
		  popup.style.transform = "translateX(-50%)"
		}
	  }
	}, [showInfo])
  
	// Determine if this is an edge book
	const isFirstBook = index === 0
	const isLastBook = index === totalBooks - 1
  
	return (
	  <div
		ref={bookRef}
		className={`book-stack ${isFirstBook ? "first-book" : ""} ${isLastBook ? "last-book" : ""}`}
		onClick={() => setShowInfo(!showInfo)}
		onMouseEnter={() => setShowInfo(true)}
		onMouseLeave={() => setShowInfo(false)}
	  >
		<img src={image || "/placeholder.svg"} alt={alt} />
		<div ref={popupRef} className={`book-info ${showInfo ? "active" : ""}`}>
		  <h4>{title}</h4>
		  <p>{description}</p>
		</div>
	  </div>
	)
  }
  
  

export default Book
