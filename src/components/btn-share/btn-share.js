define(['knockout', 'text!./btn-share.html'], function(ko, templateMarkup) {

  function BtnShare(params) {
    /*this.message = ko.observable('Hello from the btn-share component!');*/
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  BtnShare.prototype.dispose = function() { };
  
  return { viewModel: BtnShare, template: templateMarkup };

});
