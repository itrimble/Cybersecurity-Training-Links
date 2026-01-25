import { useState } from "react";
import { Book, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { books, bookCategories } from "@/data/books";

export function BooksSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBooks = activeCategory === "All"
    ? books
    : books.filter((book) => book.category === activeCategory);

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="section-label">[ RECOMMENDED READING ]</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Must-Read <span className="text-primary">Security Books</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Build your knowledge with these essential cybersecurity books,
              hand-picked by industry professionals.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {bookCategories.slice(0, 8).map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Books grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredBooks.map((book) => (
              <a
                key={book.isbn}
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card p-4 group hover:border-primary/50 transition-colors"
              >
                <div className="aspect-[3/4] relative mb-4 bg-secondary/50 flex items-center justify-center overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement?.classList.add('book-placeholder');
                    }}
                  />
                  <div className="book-placeholder-icon hidden absolute inset-0 flex items-center justify-center">
                    <Book className="h-12 w-12 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-primary uppercase">
                    {book.category}
                  </span>
                  <h3 className="font-semibold text-sm mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {book.description}
                  </p>
                  <div className="flex items-center gap-1 mt-3 text-xs text-primary">
                    <span>View on Amazon</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Affiliate disclosure */}
          <p className="text-center text-xs text-muted-foreground mt-8">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>

      <style>{`
        .book-placeholder .book-placeholder-icon {
          display: flex !important;
        }
      `}</style>
    </section>
  );
}
