import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
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
