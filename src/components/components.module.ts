import { NgModule } from '@angular/core';
import { ExpandableHeader } from './expandable-header/expandable-header';
import { ShrinkingSegmentHeader } from './shrinking-segment-header/shrinking-segment-header';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [ExpandableHeader,
    ShrinkingSegmentHeader,
    ],
	imports: [IonicModule],
	exports: [ExpandableHeader,
    ShrinkingSegmentHeader,
    ]
})
export class ComponentsModule {}
