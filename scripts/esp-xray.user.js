// ==UserScript==
// @name         Voxiom ESP & X-Ray
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Renderizado visual mejorado de entidades en Voxiom.io (experimental)
// @author       Brashkie
// @match        *://voxiom.io/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const observer = new MutationObserver(() => {
        document.querySelectorAll('.player').forEach(player => {
            if (!player.style.outline) {
                player.style.outline = '2px solid lime';
                player.style.background = 'rgba(0, 255, 0, 0.2)';
            }
        });

        // X-Ray básico: hace bloques transparentes
        document.querySelectorAll('.block').forEach(block => {
            block.style.opacity = '0.4';
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Loop de seguridad
    setInterval(() => {
        if (location.hostname.includes('voxiom.io')) {
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }, 2000);
})();
