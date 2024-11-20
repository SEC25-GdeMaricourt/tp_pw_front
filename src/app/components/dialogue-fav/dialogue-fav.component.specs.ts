import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogueFavComponent } from './dialogue-fav.component';

describe('DialogueFavComponent', () => {
  let component: DialogueFavComponent;
  let fixture: ComponentFixture<DialogueFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueFavComponent ],
      providers: [
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogueFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});