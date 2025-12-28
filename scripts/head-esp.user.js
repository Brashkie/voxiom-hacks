// ==UserScript==
// @name         Voxiom Head ESP
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Destaque visual de cabezas de jugadores
// @author       Brashkie
// @match        *://voxiom.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = `
        .player::before {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background: red;
            border-radius: 50%;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999;
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);
})();
