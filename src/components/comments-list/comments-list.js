define(['knockout', 'text!./comments-list.html', 'common/MyDateNow'],
    function(ko, templateMarkup, myDateNowStr) {

        var initialData = [
            {
                authorName: "Stoyan Daskaloff",
                authorImage: "image/stoyan.png",
                createdAt: "MARCH 7, 2013 AT 7:30 PM",
                text: "Duis turpis orci, ultrices vitae nulla eget, laoreet posuere nisl. Duis tempus mauris sit amet pulvinar tempor. Vestibulum eu erat quam. Curabitur libero ipsum, pharetra eget lorem id, posuere fermentum dui. Nulla nec turpis eros. Integer maximus tellus eget nisl tempus, ac sodales elit tempor. Nulla laoreet semper eros in commodo.",
                replies: [],
                loggedUser: "Plamen Shipkovenski",
                loggedUserImage: "image/default-user.png"}
        ];

        function Comment(params) {
            var self = this;

            self.authorImage = params.authorImage;
            self.authorName = params.authorName;
            self.createdAt = params.createdAt;
            self.text = params.text;

            self.replyText = ko.observable("").trimmed();

            self.replies = ko.observableArray();

            self.addReply = function (data, event) {

                if(event.which == 13 ){
                    if(self.replyText() != "") {
                        self.replies.push({
                            authorName: initialData[0].loggedUser,
                            authorImage: initialData[0].loggedUserImage,
                            createdAt: myDateNowStr.droobleFormat,
                            text: self.replyText()
                        });
                    }

                    self.replyText = ko.observable("").trimmed();
                    $('.tab-pane .input-reply').val(self.replyText());
                }

                return true;
            }
        }

        function CommentsList() {
            var self = this;

            self.comments = ko.observableArray([
                new Comment({
                    authorName: initialData[0].authorName,
                    authorImage: initialData[0].authorImage,
                    createdAt: initialData[0].createdAt,
                    text: initialData[0].text
                })
            ]);

            self.commentText = ko.observable("").trimmed();

            self.addComment = function (data, event) {

                if(event.which == 13 ){
                    if(self.commentText() != "") {

                        self.comments.push(
                            new Comment({
                                authorName: initialData[0].loggedUser,
                                authorImage: initialData[0].loggedUserImage,
                                createdAt: myDateNowStr.droobleFormat,
                                text: self.commentText()
                            })
                        );
                    }


                    self.commentText = ko.observable("").trimmed();
                    $('.input-comment').val(self.commentText());
                }

                return true;
            }
        };

    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    CommentsList.prototype.dispose = function() { };

    return { viewModel: CommentsList, template: templateMarkup };

});
