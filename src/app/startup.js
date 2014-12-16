define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections'], function($, ko, router) {

// The 'trimmed' extension
    ko.subscribable.fn.trimmed = function() {
        return ko.computed({
            read: function() {
                return this().trim();
            },
            write: function(value) {
                this(value.trim());
                this.valueHasMutated();
            },
            owner: this
        });
    };
// Note that `valueHasMutated` seems to be required for `<input>` elements to reflect changes. At least on Chrome.


// Legacy browser support
    if (!String.prototype.trim) {
        String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ''); };
    }

  ko.components.register('comment-bar-social', { require: 'components/comment-bar-social/comment-bar-social' });

  ko.components.register('btn-like', { require: 'components/btn-like/btn-like' });

  ko.components.register('btn-share', { require: 'components/btn-share/btn-share' });

  ko.components.register('btn-comment', { require: 'components/btn-comment/btn-comment' });

  ko.components.register('btn-report', { require: 'components/btn-report/btn-report' });

  ko.components.register('comments-list', { require: 'components/comments-list/comments-list' });

  ko.components.register('comment-tab', { require: 'components/comment-tab/comment-tab' });

  ko.components.register('reply-bar-social', { require: 'components/reply-bar-social/reply-bar-social' });

  ko.components.register('pop-up', { require: 'components/pop-up/pop-up' });

  ko.components.register('iframe-video', { require: 'components/iframe-video/iframe-video' });

  ko.components.register('video-container', { require: 'components/video-container/video-container' });

  // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

  // Start the application
  ko.applyBindings({ route: router.currentRoute });
});
