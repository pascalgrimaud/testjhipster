import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestjhipsterRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { TestjhipsterCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { TestjhipsterLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { TestjhipsterDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { TestjhipsterTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { TestjhipsterEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { TestjhipsterJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { TestjhipsterJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        TestjhipsterRegionMySuffixModule,
        TestjhipsterCountryMySuffixModule,
        TestjhipsterLocationMySuffixModule,
        TestjhipsterDepartmentMySuffixModule,
        TestjhipsterTaskMySuffixModule,
        TestjhipsterEmployeeMySuffixModule,
        TestjhipsterJobMySuffixModule,
        TestjhipsterJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestjhipsterEntityModule {}
