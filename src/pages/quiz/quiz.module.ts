import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { QuizPage } from './quiz';
import { QuizServices} from './quizServices';
import { SubjectscorePage} from './subjectscore/subjectscore';
import { TopicscorePage } from './topicscore/topicscore';
import { AddquizPage } from './addquiz/addquiz';

@NgModule({
  declarations: [
    QuizPage,
    SubjectscorePage,
    TopicscorePage,
  ],
  imports: [
    IonicPageModule.forChild(QuizPage),
  ],
  exports:[
    QuizPage,
    SubjectscorePage,
    TopicscorePage,
    ],
  entryComponents:[
    QuizPage,
    SubjectscorePage,
    TopicscorePage,
    ],
  providers:[QuizServices
     ]
})
export class QuizPageModule {}
