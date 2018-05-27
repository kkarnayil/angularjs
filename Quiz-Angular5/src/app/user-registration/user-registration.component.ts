import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuizService} from '../services/quiz.service';
import {Candidate} from '../vo/candidate';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  private registrationFormTitle;
  private registrationFormDescription;
  private candidate;

  constructor(private router: Router, private service: QuizService) {}

  ngOnInit() {
    this.registrationFormTitle = 'Quiz Registration';
    this.registrationFormDescription = 'Start Quiz by filling below form';
    this.candidate = new Candidate();
  }

  registerCandidate(event) {
    console.log('Register Candidate: ' + JSON.stringify(this.candidate));
    this.service.registerCandidate(this.candidate);
    this.router.navigate(['questions']);
    console.log('User Registered');
  }

}
