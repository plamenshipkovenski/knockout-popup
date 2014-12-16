define(['knockout', 'text!./comment-bar-social.html'], function(ko, templateMarkup) {

  function CommentBarSocial(params) {
    /*this.message = ko.observable('Hello from the comment-bar-social component!');*/
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  CommentBarSocial.prototype.dispose = function() { };
  
  return { viewModel: CommentBarSocial, template: templateMarkup };

});
