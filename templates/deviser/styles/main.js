// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.
(function(){


    $(function(){
        initPopUp();
    })

    function initPopUp(){

        $('.img-popup').on('click',function(){
            var $img = $(this),
                imgSrc = $img.attr('src');
            
            $.magnificPopup.open({
                items: {
                    src: imgSrc
                },
                type: 'image'
            });
        });

        $('.video-popup').on('click',function(){
            var $vid = $(this),
                vidSrc = $vid.find('source').attr('src');
            
            $.magnificPopup.open({
                items: {
                    src: vidSrc
                },
                type: 'iframe'
            });
        });



        
    }

}());