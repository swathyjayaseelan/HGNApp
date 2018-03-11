
import moment from 'moment';
import { inject } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({

    timeEntryService: inject('time-entry-service'),
    notes: "",
    dateofWork: "",
    taskhours: "",
    taskminutes: "",
    taskseconds: "",
    isTangible: true,


    init() {
        this._super(...arguments);
        let user = this.get('loggedinUser');

        this.get('timeEntryService').getUserProjects(user)
            .then(results => { this.set('projects', results); });

    },

    actions: {
        submitTimeEntry() {
            let toastr = this.get('ToastorService');

            let timeentry = {};

            let hours = (this.get('taskhours')) ? this.get('taskhours') : "00";
            let minutes = (this.get('taskminutes')) ? this.get('taskminutes') : "00";
            let seconds = (this.get('taskseconds')) ? this.get('taskseconds') : "00";

            let timespent = hours + ":" + minutes + ":" + seconds;
            let dateofWork = moment(this.get('dateofWork')).format('YYYY-MM-DD');
            timeentry.personId = this.get('loggedinUser.requestorId');
            timeentry.projectId = this.get('forprojectId');
            timeentry.taskId = this.get('fortaskId');
            timeentry.dateofWork = dateofWork;
            timeentry.timeSpent = timespent;
            timeentry.isTangible = this.get('isTangible');
            timeentry.notes = this.get('notes');
            this.get('timeEntryService').postTimeEntry(timeentry)
                .then(results => {

                    toastr.success("", 'Time Entry Saved');
                }, error => {
                    toastr.warning(error.responseJSON.message, 'Error!!');
                });



        }

    }

});
