// contact.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styles: `
    .form-control {
      margin-bottom: 1rem;
    }

    .input:focus, .select:focus, .textarea:focus {
      outline: none;
      box-shadow: 0 0 0 2px hsl(var(--p) / 0.2);
    }

    .alert {
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .alert-success {
      background-color: hsl(var(--su) / 0.1);
      border: 1px solid hsl(var(--su) / 0.2);
      color: hsl(var(--suc));
    }

    .alert-error {
      background-color: hsl(var(--er) / 0.1);
      border: 1px solid hsl(var(--er) / 0.2);
      color: hsl(var(--erc));
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .loading {
      position: relative;
    }

    .loading::after {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      margin: auto;
      border: 2px solid transparent;
      border-top-color: currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''], // Optional field
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      try {
        const formData = this.contactForm.value;

        // Use Netlify Forms for submission
        await this.sendEmailWithNetlify(formData);

        this.submitSuccess = true;
        this.submitMessage = '¡Mensaje enviado correctamente! Te responderé pronto.';
        this.contactForm.reset();

      } catch (error) {
        console.error('Error sending email:', error);
        this.submitSuccess = false;
        this.submitMessage = 'Error al enviar el mensaje. Por favor, intenta de nuevo.';
      } finally {
        this.isSubmitting = false;

        // Clear message after 5 seconds
        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  // Opción 1: EmailJS (más fácil de implementar)
  private async sendEmailWithEmailJS(formData: any): Promise<void> {
    // Primero instala EmailJS: npm install @emailjs/browser
    // Luego importa: import emailjs from '@emailjs/browser';

    /*
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'No especificada',
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email
    };

    return emailjs.send(
      'YOUR_SERVICE_ID',    // Obténlo de EmailJS
      'YOUR_TEMPLATE_ID',   // Obténlo de EmailJS
      templateParams,
      'YOUR_PUBLIC_KEY'     // Obténlo de EmailJS
    );
    */

    // Simulación para demo (reemplaza con el código de arriba)
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Datos del formulario:', formData);
        resolve(undefined);
      }, 2000);
    });
  }



  // Netlify Forms implementation
  private async sendEmailWithNetlify(formData: any): Promise<void> {
    // Create URLSearchParams for form submission
    const params = new URLSearchParams();
    params.append('form-name', 'contact');
    
    // Add all form fields
    Object.keys(formData).forEach(key => {
      if (formData[key]) {
        params.append(key, formData[key]);
      }
    });

    const response = await fetch('/', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded' 
      },
      body: params.toString()
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
  }

  // Getters para facilitar el acceso a los campos en el template
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get company() { return this.contactForm.get('company'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }

  // Helper method para mostrar errores específicos
  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} es requerido`;
      if (field.errors['email']) return 'Email no válido';
      if (field.errors['minlength']) return `Mínimo ${field.errors['minlength'].requiredLength} caracteres`;
      if (field.errors['maxlength']) return `Máximo ${field.errors['maxlength'].requiredLength} caracteres`;
    }
    return '';
  }
}
