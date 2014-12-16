define(['knockout', 'text!./reply-bar-social.html'], function(ko, templateMarkup) {

  function ReplyBarSocial(params) {
    /*this.message = ko.observable('Hello from the reply-bar-social component!');*/
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  ReplyBarSocial.prototype.dispose = function() { };
  
  return { viewModel: ReplyBarSocial, template: templateMarkup };

});
