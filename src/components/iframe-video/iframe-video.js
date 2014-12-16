define(['knockout', 'text!./iframe-video.html'], function(ko, templateMarkup) {

  function IframeVideo(params) {
      var self = this;
      self.isValidId = ko.observable(false).computed;
      self.id = ko.observable("").trimmed();
      self.processId = function (data, event) {
          if (event.which == 13) {
              if (self.id() !== "") {
                  if (self.validateUrl(self.id())) {

                      self.id = self.getVideoId(self.id());
                  }
              }

              if(self.isValidId == true){
                  $('.input-video').hide();
              } else {
                  self.id = ko.observable("");
                  $('.input-video').val(self.id());
              }
          }
      };

      self.validateUrl = function (textVal) {
          // TO DO
          var urlregex = new RegExp( "^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([0-9A-Za-z]+\.)" );

          return urlregex.test(textVal);
      };

      self.getVideoId = function (url) {
          var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
          var match = url.match(regExp);

          if (match && match[2].length == 11) {

              self.isValidId = !self.isValidId;

              return match[2];
          }
          else {
              console.log('can\'t match video Id' );
          }
      };
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  IframeVideo.prototype.dispose = function() { };

    return { viewModel: IframeVideo, template: templateMarkup };

});