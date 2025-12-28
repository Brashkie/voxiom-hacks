// ==UserScript==
// @name         Voxiom Better Text
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Mejora legibilidad del texto en pantalla
// @author       Brashkie
// @match        *://voxiom.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = `
        * {
            text-shadow: 2px 2px 4px black !important;
            font-weight: bold !important;
            color: white !important;
        }
        .hud, .chat, .scoreboard {
            font-size: 16px !important;
        }
    `;
    document.head.appendChild(style);
})();
