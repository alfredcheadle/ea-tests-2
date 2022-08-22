var myPostRender = function(vals) {
    (function ($) {
      console.log('CloudFlare JS served:');
        $('.ea-delay-display').show();
        if ($('.content.thankYou').length){
            $('#TYAboutGift').show();
            $('#PrivacyPolicy').hide();
        }
        else{
            var $privacyDiv = $('#PrivacyPolicy').clone();
            $('.at-form-submit.clearfix').append($privacyDiv);
            $('.at-form-submit.clearfix #PrivacyPolicy').show();
            $('#PrivacyPolicy_original').remove();
        }
    }(jQuery));
};

var nvtag_callbacks = nvtag_callbacks || {};
nvtag_callbacks.postRender = nvtag_callbacks.postRender || [];
nvtag_callbacks.postRender.push(myPostRender);
