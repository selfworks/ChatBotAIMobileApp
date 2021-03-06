/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function sendMessage() {
    var message = $('.js-chat-input').val();
    var template = '<div class="chatbox-replies">\n' +
        '                <div class="chatbox-replies-name">\n' +
        '                    Божидар <small class="chatbox-replies-time">19:25PM</small>\n' +
        '                </div>\n' +
        '                <div class="chatbox-replies-message">\n' + message + '</div>\n' +
        '            </div>';
    $('.js-chatbox-chronology').append(template);

    $(".js-chatbox-chronology").scrollTop($(".js-chatbox-chronology")[0].scrollHeight);

    $('.js-chat-input').val('');
}


$(document).keypress(function(e) {
    if (e.which == 13) {
        sendMessage();
    }
});

$(document).ready(function() {

    $('a').click(function (e) {
        e.preventDefault();
        $('body').fadeOut(300);
        link = $(this).attr('href');
        setTimeout(function () {
            window.location.href = link;
        }, 300);
    });

    $('.js-chat-send').click(function () {
       sendMessage();
    });

    $(".chatbox-input-text").focus(function() {
       $(this).addClass('chatbox-input-text-large');
       $('.chatbox-input-emoticons').hide();
       $('.chatbox-input-upload').hide();
    });

    $(".chatbox-input-text").focusout(function() {
       $(this).removeClass('chatbox-input-text-large');
       $('.chatbox-input-emoticons').fadeIn();
       $('.chatbox-input-upload').fadeIn();
    });
});