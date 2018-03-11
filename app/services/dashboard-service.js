
import { inject } from '@ember/service';
import Service from '@ember/service';

export default Service.extend({
  dataService: inject('datastore-service'),

  getDashboardData(requestor) {

    let relativePath = "/dashboard/" + requestor.requestorId;
    let data = null;
    let method = "get";
    let request = this.get('dataService').createEmberrequestObject(relativePath, data, method);
    return request;
  },

  getWeeklyEffort(requestor) {
    let relativePath = "/dashboard/weeklydata/" + requestor.requestorId;
    let data = null;
    let method = "get";
    let request = this.get('dataService').createEmberrequestObject(relativePath, data, method);
    return request;

  },
  getLeaderBoard(requestor) {
    let relativePath = "/dashboard/leaderboard/" + requestor.requestorId;
    let data = null;
    let method = "get";
    let request = this.get('dataService').createEmberrequestObject(relativePath, data, method);
    return request;

  },
  getMonthlyEffort(requestor) {
    let relativePath = "/dashboard/monthlydata/" + requestor.requestorId;
    let data = null;
    let method = "get";
    let request = this.get('dataService').createEmberrequestObject(relativePath, data, method);
    return request;

  }


});
