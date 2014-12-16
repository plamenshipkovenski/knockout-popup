define(['knockout', 'text!./pop-up.html'], function(ko, templateMarkup) {

  function PopUp(params) {

  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  PopUp.prototype.dispose = function() { };
  
  return { viewModel: PopUp, template: templateMarkup };

});
