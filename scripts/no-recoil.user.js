// ==UserScript==
// @name         Voxiom No Recoil
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Reducción experimental de retroceso
// @author       Brashkie
// @match        *://voxiom.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    Object.defineProperty(window, 'recoil', { value: 0, writable: false });
    setInterval(() => {
        if (window.game && window.game.player) {
            window.game.player.recoil = 0;
            window.game.player.weaponRecoil = 0;
        }
    }, 10);
})();
