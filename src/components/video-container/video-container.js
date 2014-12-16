define(['knockout', 'text!./video-container.html'], function(ko, templateMarkup) {

    ko.bindingHandlers['player'] = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            // Check if global script and function is declared.
            if ( !document.getElementById('playerScript') ) {
                // Create script
                var tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                var playerDiv = document.getElementById('player');
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                // Create global function that their API calls back
                window.playerReady = ko.observable(false);
                window.onYouTubeIframeAPIReady = function() {
                    window.playerReady(true);
                };
            }
        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

            var value = valueAccessor(),
                id = value.id(),
                height = ko.unwrap(value.height) || '250',
                width = ko.unwrap(value.width) || '444'
                ;

            if ( !value.id()) {
                return;
            }

            if ( !window.playerReady() ) {
                // YT hasn't invoked global callback.  Subscribe to update
                var subscription;
                subscription = window.playerReady.subscribe( function(newValue) {
                    if ( newValue ) {
                        subscription.dispose();
                        // Just get this binding to fire again
                        value.id.notifySubscribers(value.id());
                    }
                });
            } else {

                var player = new YT.Player( element, {
                    height: height,
                    width: width,
                    videoId: id
                });
            }
        }
    }

  function VideoContainer(params) {
      var self = this;
      self.id = params.id;
      self.height = "100%";
      self.width = "100%";
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  VideoContainer.prototype.dispose = function() { };
  
  return { viewModel: VideoContainer, template: templateMarkup };

});
