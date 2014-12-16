define(['knockout', 'text!./btn-report.html'], function(ko, templateMarkup) {

  function BtnReport(params) {
    /*this.message = ko.observable('Hello from the btn-report component!');*/
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  BtnReport.prototype.dispose = function() { };

  return { viewModel: BtnReport, template: templateMarkup };

});
