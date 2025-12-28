// ==UserScript==
// @name         Voxiom Rainbow ESP
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Efecto visual multicolor en entidades (experimental)
// @author       Brashkie
// @match        *://voxiom.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let hue = 0;

    setInterval(() => {
        hue = (hue + 1) % 360;
        document.querySelectorAll('.player').forEach(player => {
            player.style.outline = `3px solid hsl(${hue}, 100%, 50%)`;
            player.style.boxShadow = `0 0 10px hsl(${hue}, 100%, 50%)`;
        });
    }, 50);
})();
