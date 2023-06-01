import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-toast',
  template: `
    <div class="toast" [class.success]="isSuccess" [class.loading]="isLoading" [class.error]="isError">
      {{ message }}
    </div>
  `,
  styles: [`
    .toast {
      position: fixed;
      top: 50px; /* Adjust the top value as needed */
      left: 50%;
      transform: translateX(-50%);
      padding: 10px 20px;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      z-index: 9999;
      text-align: center; /* Center the text horizontally */
    }

    .success {
      background-color: #ffd740;
    }

    .loading {
      background-color: #ffd740;
    }

    .error {
      background-color: #ffd740;
    }
  `]
})

export class ToastComponent {
  @Input() toastConfig: {
    success?: string;
    loading?: string;
    error?: (error: any) => string;
  } = {}; // Initialize with an empty object

  get isSuccess(): boolean {
    return !!this.toastConfig?.success;
  }

  get isLoading(): boolean {
    return !!this.toastConfig?.loading;
  }

  get isError(): boolean {
    return !!this.toastConfig?.error;
  }

  get message(): string {
    if (this.isSuccess) {
      return this.toastConfig.success || '';
    } else if (this.isLoading) {
      return this.toastConfig.loading || '';
    } else if (this.isError && this.toastConfig.error) {
      const errorMessage = this.toastConfig.error({ message: 'Error message' });
      return errorMessage || '';
    } else {
      return '';
    }
  }
}
