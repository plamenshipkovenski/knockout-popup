define(['knockout', 'text!./btn-like.html'], function(ko, templateMarkup) {

  function BtnLike(params) {
    /*this.message = ko.observable('Hello from the btn-like component!');*/
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  BtnLike.prototype.dispose = function() { };
  
  return { viewModel: BtnLike, template: templateMarkup };

});
