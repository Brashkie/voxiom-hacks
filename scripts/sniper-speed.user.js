// ==UserScript==
// @name         Voxiom Sniper Speed
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Movilidad mejorada con sniper
// @author       Brashkie
// @match        *://voxiom.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        if (window.game && window.game.player && window.game.player.weapon) {
            if (window.game.player.weapon.name.includes('Sniper')) {
                window.game.player.speedMultiplier = 1.3;
            }
        }
    }, 100);
})();
