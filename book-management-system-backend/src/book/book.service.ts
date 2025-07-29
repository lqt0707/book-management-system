import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { DbService } from 'src/db/db.service';
import { Book } from './entities/book.entity';

function randomNum() {
  return Math.floor(Math.random() * 1000000000);
}

@Injectable()
export class BookService {
  @Inject()
  dbService: DbService;

  async list() {
    const books: Book[] = await this.dbService.read();
    return books;
  }
  async findById(id: number) {
    const books: Book[] = await this.dbService.read();
    const book = books.find((item) => item.id === id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }
  async create(createBookDto: CreateBookDto) {
    const books: Book[] = await this.dbService.read();
    const book: Book = {
      id: randomNum(),
      name: createBookDto.name,
      author: createBookDto.author,
      description: createBookDto.description,
      cover: createBookDto.cover,
    };
    books.push(book);
    await this.dbService.write(books);
    return book;
  }
  async update(updateBookDto: UpdateBookDto) {
    const books: Book[] = await this.dbService.read();
    const book = books.find((item) => item.id === Number(updateBookDto.id));
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    book.name = updateBookDto.name;
    book.author = updateBookDto.author;
    book.description = updateBookDto.description;
    book.cover = updateBookDto.cover;
    await this.dbService.write(books);
    return book;
  }
  async delete(id: number) {
    const books: Book[] = await this.dbService.read();
    const index = books.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException('Book not found');
    }
    books.splice(index, 1);
    await this.dbService.write(books);
  }
}
