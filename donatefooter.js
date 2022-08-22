var myPostRender = function(vals) {
    (function ($) {
      console.log('TEST2 Branch served:');
        document.querySelector('.at-markup.HeaderHtml').textContent = 'TEST2 Dev Branch Served';
        document.querySelector('.site-header').style.background = 'pink';
        
    }(jQuery));
};

var nvtag_callbacks = nvtag_callbacks || {};
nvtag_callbacks.postRender = nvtag_callbacks.postRender || [];
nvtag_callbacks.postRender.push(myPostRender);
