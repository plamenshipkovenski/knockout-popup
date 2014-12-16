define(['knockout', 'text!./comment-tab.html'], function(ko, templateMarkup) {

    var Section = function (name, selected, placeHolder) {
        this.name = name;
        this.placeHolder = placeHolder;
        this.isSelected = ko.computed(function() {
            return this === selected();
        }, this);
    };

  function CommentTab(params) {
      var self = this;

      self.selectedSection = ko.observable();

      self.sections = ko.observableArray([
          new Section('COMMENT', self.selectedSection, ' Reply ...'),
          new Section('PHOTO', self.selectedSection, ' Choose Photo ...'),
          new Section('FEEDBACK', self.selectedSection, ' What is this for ?!')
      ]);

      //inialize to the first section
      self.selectedSection(self.sections()[0]);

      self.placeHolder = self.selectedSection.placeHolder;
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  CommentTab.prototype.dispose = function() { };
  
  return { viewModel: CommentTab, template: templateMarkup };

});
