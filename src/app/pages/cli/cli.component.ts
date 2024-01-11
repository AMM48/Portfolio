import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {LoadDataDirective} from '../../directives/load-data.directive';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Project } from '../home/components/interfaces/Project.interface';
@Component({
  selector: 'app-cli',
  standalone: true,
  imports: [FormsModule, LoadDataDirective],
  templateUrl: './cli.component.html',
  styleUrl: './cli.component.css',
})
export class CliComponent implements OnInit {

  projects: Project[] = [];
  dataLoaded(data: Project[]) {
    this.projects = data;
    console.log(this.projects);
  }

  constructor(private rendered: Renderer2, private titleService: Title, private router: Router) {}
  @ViewChild('textarea') textarea!: ElementRef;
  @ViewChild('cursor') cursor!: ElementRef;

  commands: { command: string; output?: string; class?: string }[] = [];
  year: number = new Date().getFullYear();
  currentCommand: string = '';
  directory: string = '';
  inputValue: string = '';
  
  ngOnInit() {
    this.titleService.setTitle("AMM's | CLI");
  }
  ngAfterViewInit() {
    this.blink();
  }

  blink() {
    const cursorElement = this.cursor.nativeElement;

    setInterval(() => {
      const currentOpacity = parseFloat(
        getComputedStyle(cursorElement).opacity
      );
      const newOpacity = currentOpacity === 0 ? 1 : 0;
      this.rendered.setStyle(cursorElement, 'opacity', newOpacity.toString());
    }, 500);
  }
  executeCommand(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.currentCommand = this.inputValue.trim().toLowerCase();
      if (this.currentCommand === '') {
        this.commands.push({
          command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
        });
      } 
      else if (this.currentCommand === 'ls') {
       this.handleLs();
      } 
      else if (this.currentCommand.split(' ')[0] === 'cd') {
         this.handleCd();
    } else if (this.currentCommand.split(' ')[0] === 'cat') {
      this.handleCat();
    } else if (this.currentCommand === 'clear') {
      this.commands.length = 0;
    } else if (this.currentCommand === 'gui') {
      this.router.navigate(['/']);
    } else if (this.currentCommand === 'help') {
        this.handleHelp();
      } else {
      this.commands.push({
        command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
        output: `Command '${this.currentCommand}' not found, try 'help' to see a list of available commands`,
        class: 'color'
      });
    }
      this.inputValue = '';
    }
  }

  handleLs(): void {
    switch (this.directory) {
      case '':
        this.commands.push({
          command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
          output: 'introduction.txt&nbsp;&nbsp;projects&nbsp;&nbsp;certificates',
          class: 'color'
        });
        break;
      case '/projects':
        this.commands.push({
          command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
          output: 'Expense-Tracker.txt&nbsp;&nbsp;&nbsp;Online-Grocery-Store.txt&nbsp;&nbsp;&nbsp;Organizo.txt',
          class: 'color'
        });
        break;
      case '/certificates':
        this.commands.push({
          command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
          output: 'AWS-Cloud-Practitioner.txt&nbsp;&nbsp;CompTIA-Network+.txt&nbsp;&nbsp;CompTIA-A+.txt&nbsp;&nbsp;AZ-900.txt&nbsp;&nbsp;THM-JRPenTester.txt',
          class: 'color'
        });
        break;
      default:
        this.commands.push({
          command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
          output: 'No files or folders found',
          class: 'color'
        });
        break;
    }
  }

  handleCd(): void {
    if(this.currentCommand.split(' ')[1] == undefined || this.currentCommand.split(' ')[1] === '..'){
      this.commands.push({
        command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
        output: ``,
      });
      this.directory = '';
    } else if(this.directory === '' && this.currentCommand.split(' ')[1] === 'projects') {
      this.commands.push({
        command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
        output: ``,
      });
      this.directory = '/projects';
    } else if(this.directory === '' && this.currentCommand.split(' ')[1] === 'certificates') {
      this.commands.push({
        command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
        output: ``,
      });
      this.directory = '/certificates';
    } else  {
      this.commands.push({
        command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
        output: `-bash: cd: ${this.currentCommand.split(' ')[1]}: No such file or directory`,
        class: 'color'
      });
    }
  }

  handleCat(): void {
    if(this.directory === '' && this.currentCommand.split(' ')[1] === 'introduction.txt') {
      this.commands.push({
        command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
        output: `Hey, I'm Abdulrahman Almehdar<br>Web Developer<br><br> I Graduated from King Abdulaziz University with a bachelor's degree in Information Technology
        with a GPA of 4.87 / 5. I have a passion for web development and all things
        front-end and back-end.
        I enjoy exploring
        new technologies, especially in areas such as cloud computing and virtualization. Always
        eager to learn and adapt, I'm dedicated to creating and enhancing robust web solutions.`, class: 'color wrap-text'
      }, );
    } else if (this.directory === '/projects' && this.currentCommand.split(' ')[1] === 'expense-tracker.txt') {
      const project = this.projects.find(p => p.name === "Expense Tracker");

      if (project) {
        this.commands.push({
          command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
          output: `${project.name}<br><br>${project.description}<br><br>To view the project <a href="${project.link}" target="_blank" rel="noopener noreferrer"> (Click here &#x2197;)</a>`,
          class: 'color wrap-text'
        });
      }
    } else if (this.directory === '/projects' && this.currentCommand.split(' ')[1] === 'online-grocery-store.txt') {
      const project = this.projects.find(p => p.name === "Online Grocery Store");

      if (project) {
        this.commands.push({
          command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
          output: `${project.name}<br><br>${project.description}<br><br>To view the project <a href="${project.link}" target="_blank" rel="noopener noreferrer"> (Click here &#x2197;)</a>`,
          class: 'color wrap-text'
        });
      }
    } else if (this.directory === '/projects' && this.currentCommand.split(' ')[1] === 'organizo.txt') {
      const project = this.projects.find(p => p.name === "Organizo");

      if (project) {
        this.commands.push({
          command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
          output: `${project.name}<br><br>${project.description}<br><br>To view the project <a href="${project.link}" target="_blank" rel="noopener noreferrer"> (Click here &#x2197;)</a>`,
          class: 'color wrap-text'
        });
      }
    } else if (this.directory === '/certificates' && this.currentCommand.split(' ')[1] === 'aws-cloud-practitioner.txt') {
      this.commands.push({
        command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
        output: `To view the AWS Cloud Practitioner Certificate <a href="https://raw.githubusercontent.com/AMM48/Portfolio/main/src/assets/certificates/AWS-Cloud-Practitioner.jpg" target=_blank rel="noopener noreferrer">(Click here &#x2197;)</a>`,
        class: 'color'
      });
    } else if (this.directory === '/certificates' && this.currentCommand.split(' ')[1] === 'comptia-network+.txt') {
      this.commands.push({
        command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
        output: `To view the CompTIA Network+ Certificate <a href="https://raw.githubusercontent.com/AMM48/Portfolio/main/src/assets/certificates/N%2B.jpg" target=_blank rel="noopener noreferrer">(Click here &#x2197;)</a>`,
        class: 'color'
      });
    } else if (this.directory === '/certificates' && this.currentCommand.split(' ')[1] === 'comptia-a+.txt') {
      this.commands.push({
        command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
        output: `To view the CompTIA A+ Certificate <a href="https://raw.githubusercontent.com/AMM48/Portfolio/main/src/assets/certificates/A%2B.jpg" target=_blank rel="noopener noreferrer">(Click here &#x2197;)</a>`,
        class: 'color'
      });
    } else if (this.directory === '/certificates' && this.currentCommand.split(' ')[1] === 'az-900.txt') {
      this.commands.push({
        command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
        output: `To view the AZ-900 Certificate <a href="https://raw.githubusercontent.com/AMM48/Portfolio/main/src/assets/certificates/AZ-900.jpg" target=_blank rel="noopener noreferrer">(Click here &#x2197;)</a>`,
        class: 'color'
      });
    }else if (this.directory === '/certificates' && this.currentCommand.split(' ')[1] === 'thm-jrpentester.txt') {
      this.commands.push({
        command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
        output: `To view the TryHackMe Jr Penetration Tester Certificate <a href="https://raw.githubusercontent.com/AMM48/Portfolio/main/src/assets/certificates/THM-JRPenTester.png" target=_blank rel="noopener noreferrer">(Click here &#x2197;)</a>`,
        class: 'color'
      });
    }
    
    else if(this.currentCommand.split(' ')[1] === undefined){
      this.commands.push({
        command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
        output: `Usage: cat [Filename]`,
        class: 'color'
      });
    } else{
      this.commands.push({
        command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
        output: `cat: ${this.currentCommand.split(' ')[1]}: No such file or directory`,
        class: 'color'
      });} 
  }

  handleHelp(): void {
    this.commands.push({
      command: `Abdulrahman@Almehdar:~${this.directory}$ ${this.inputValue}`,
      output:
        'ls - List files and folders in current directory<br>cd - Navigates to a specified directory<br>cat - Prints file content to the screen<br>clear - Clear the terminal screen<br>gui - Switch to a graphical user interface<br>help - List available commands',
      class: 'indent-list color',
    });
  }

  focusTextarea() {
    this.textarea.nativeElement.focus();
  }
}
