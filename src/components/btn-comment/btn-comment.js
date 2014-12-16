define(['knockout', 'text!./btn-comment.html'], function(ko, templateMarkup) {

  function BtnComment(params) {
    /*this.message = ko.observable('Hello from the btn-comment component!');*/
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  BtnComment.prototype.dispose = function() { };
  
  return { viewModel: BtnComment, template: templateMarkup };

});
