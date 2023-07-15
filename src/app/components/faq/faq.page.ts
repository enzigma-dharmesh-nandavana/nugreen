import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'faq',
  templateUrl: './faq.page.html',
})
export class FaqPage implements OnInit {

  faqs: any[] = [
    { id: 1, question: 'What is Nugreen?', answer: 'Nugreen is a company that specializes in sustainable energy solutions.', isOpen: false },
    { id: 2, question: 'How can I contact Nugreen for inquiries?', answer: 'You can contact Nugreen by phone at +1-123-456-7890 or by email at info@nugreen.com.', isOpen: false },
    { id: 3, question: 'What are the benefits of using Nugreen products?', answer: 'Nugreen products offer energy efficiency, reduced carbon footprint, and long-term cost savings.', isOpen: false }
  ];
  filteredFaqs: any[] = [];
  searchQuery: string = '';

  toggleAnswer(faq: any): void {
    faq.isOpen = !faq.isOpen;
  }

  filterFaqs(event: any): void {
    const searchQuery = event.detail.value.toLowerCase();
    this.searchQuery = searchQuery;
    this.filteredFaqs = this.faqs.filter(faq =>
      faq.question.toLowerCase().startsWith(this.searchQuery)
    );
  }

  ngOnInit() {
    this.filteredFaqs = this.faqs;
  }
}
