import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  toastVisible = signal(false);
  private hideTimerId: ReturnType<typeof setTimeout> | null = null;

  async onSubmit(form: NgForm) {
    if (form.invalid) return;

    const { name, email, message } = form.value;

    try {
      await emailjs.send(
        'service_ge5ydbk',
        'template_zsvug1p',
        { name, email, message },
        { publicKey: '8b0jsP3HU_yrksfC_' }
      );

      this.showToast();
      form.resetForm();
    } catch (err) {
      console.error('Mail senden fehlgeschlagen:', err);
    }
  }

  private showToast() {
    this.toastVisible.set(true);
    if (this.hideTimerId) clearTimeout(this.hideTimerId);
    this.hideTimerId = setTimeout(() => {
      this.toastVisible.set(false);
      this.hideTimerId = null;
    }, 3000);
  }
}