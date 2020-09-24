import { Component } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';
import { Book } from 'src/app/shared/models';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss']
})
export class BooksPage {
  state = 'loading';
  books: Book[];

  constructor(
    private bookService: BookService,
    private alertController: AlertController,
    private toastController: ToastController
    ) {}

  ionViewWillEnter() {
    this.loadBooks();
  }

  loadBooks(event?) {
    this.state = 'loading';
    this.bookService.getBooks().subscribe(
      (books) => {
        this.books = books;
        this.state = 'loaded';

        event?.target?.complete();
      },
      (error) => {
        this.state = 'error';
        console.log(error);
      }
    );
  }

  /**
   * Remove a book
   * @param book 
   */
  async removeBook(book:Book): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Confirm remove book',
      message: '¿Are you sure removing book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Yes',
          handler: () => {
            this.bookService.deleteBook(book.id).subscribe(
              ()=>{
                this.showToast('Book removed successfully');
                this.loadBooks();
              },
              ()=>{
                this.showToast('An error ocurried');

              }
            )
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * Show message from a toast
   * @param message 
   */
  private async showToast(message:string): Promise<void>{
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
