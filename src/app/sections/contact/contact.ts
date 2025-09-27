import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  toastVisible = false;

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const { name, email, message, privacy } = form.value;

    // 🔹 Hier könntest du EmailJS oder einen Backend-API-Call einbauen
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Privacy accepted:', privacy);

    // Formular zurücksetzen
    form.resetForm();

    // Toast anzeigen
    this.toastVisible = true;

    // Nach 3 Sekunden Toast wieder ausblenden
    setTimeout(() => (this.toastVisible = false), 3000);
  }
}