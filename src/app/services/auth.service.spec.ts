import { TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Auth, useValue: {} } // Provide a mock or dummy object for the Auth class
      ]
    });
    service = TestBed.inject(AuthService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should login', ()=> {
  //   expect()
  // });
});
