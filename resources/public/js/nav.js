import FetchApi from "../../admin/js/helpers/fetch_api";

require('./bootstrap');
if (typeof Object.create !== 'function') {
    Object.create = function(obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}

(function($, window, document, undefined) {
    "use strict";
    const SinglePageNav = {

        init: function(options, container) {

            this.options = $.extend({}, $.fn.singlePageNav.defaults, options);

            this.container = container;
            this.$container = $(container);
            this.$links = this.$container.find('a');

            if (this.options.filter !== '') {
                this.$links = this.$links.filter(this.options.filter);
            }

            this.$window = $(window);
            this.$htmlbody = $('html, body');

            this.$links.on('click.singlePageNav', $.proxy(this.handleClick, this));

            this.didScroll = false;
            this.checkPosition();
            this.setTimer();
        },

        handleClick: function(e) {
            var self  = this,
                link  = e.currentTarget,
                $elem = $(link.hash);

            e.preventDefault();

            if ($elem.length) { // Make sure the target elem exists

                // Prevent active link from cycling during the scroll
                self.clearTimer();

                // Before scrolling starts
                if (typeof self.options.beforeStart === 'function') {
                    self.options.beforeStart();
                }

                self.setActiveLink(link.hash);

                self.scrollTo($elem, function() {

                    if (self.options.updateHash && history.pushState) {
                        history.pushState(null,null, link.hash);
                    }

                    self.setTimer();

                    // After scrolling ends
                    if (typeof self.options.onComplete === 'function') {
                        self.options.onComplete();
                    }
                });
            }
        },

        scrollTo: function($elem, callback) {
            var self = this;
            var target = self.getCoords($elem).top;
            var called = false;

            self.$htmlbody.stop().animate(
                {scrollTop: target},
                {
                    duration: self.options.speed,
                    easing: self.options.easing,
                    complete: function() {
                        if (typeof callback === 'function' && !called) {
                            callback();
                        }
                        called = true;
                    }
                }
            );
        },

        setTimer: function() {
            var self = this;

            self.$window.on('scroll.singlePageNav', function() {
                self.didScroll = true;
            });

            self.timer = setInterval(function() {
                if (self.didScroll) {
                    self.didScroll = false;
                    self.checkPosition();
                }
            }, 250);
        },

        clearTimer: function() {
            clearInterval(this.timer);
            this.$window.off('scroll.singlePageNav');
            this.didScroll = false;
        },

        // Check the scroll position and set the active section
        checkPosition: function() {
            var scrollPos = this.$window.scrollTop();
            var currentSection = this.getCurrentSection(scrollPos);
            if(currentSection!==null) {
                this.setActiveLink(currentSection);
            }
        },

        getCoords: function($elem) {
            return {
                top: Math.round($elem.offset().top) - this.options.offset
            };
        },

        setActiveLink: function(href) {
            var $activeLink = this.$container.find("a[href$='" + href + "']");

            if (!$activeLink.hasClass(this.options.currentClass)) {
                this.$links.removeClass(this.options.currentClass);
                $activeLink.addClass(this.options.currentClass);
            }
        },

        getCurrentSection: function(scrollPos) {
            var i, hash, coords, section;

            for (i = 0; i < this.$links.length; i++) {
                hash = this.$links[i].hash;

                if ($(hash).length) {
                    coords = this.getCoords($(hash));

                    if (scrollPos >= coords.top - this.options.threshold) {
                        section = hash;
                    }
                }
            }

            // The current section or the first link if it is found
            return section || ((this.$links.length===0) ? (null) : (this.$links[0].hash));
        }
    };
    $.fn.singlePageNav = function(options) {
        return this.each(function() {
            const singlePageNav = Object.create(SinglePageNav);
            singlePageNav.init(options, this);
        });
    };

    $.fn.singlePageNav.defaults = {
        offset: 0,
        threshold: 120,
        speed: 400,
        currentClass: 'current',
        easing: 'swing',
        updateHash: false,
        filter: '',
        onComplete: false,
        beforeStart: false
    };

})(jQuery, window, document);

//$('#nav').singlePageNav();


// Import and add each page to the DOM
/*Array.prototype.forEach.call(links, (link) => {
    console.log(link.import);
    let template = link.import.querySelector('.task-template');
    let clone = document.importNode(template.content, true);
    if (link.href.match('about.html')) {
        document.querySelector('body').appendChild(clone)
    } else {
        document.querySelector('.content').appendChild(clone)
    }
})*/

document.body.addEventListener('click', (event) => {
    if (event.target.dataset.section) {
        handleSectionTrigger(event)
    } else if (event.target.dataset.modal) {
        handleModalTrigger(event)
    } else if (event.target.classList.contains('modal-hide')) {
        hideAllModals()
    }
});

/**
 *
 * @param event
 * @returns {Promise<void>}
 */
 async function handleSectionTrigger (event) {
   const view = event.target.dataset.section;
   document.querySelectorAll('#nav li a').forEach(element=>{
       element.classList.remove('current')
   });
   event.target.classList.add('current')
    localStorage.setItem('activeSectionButtonId', view);
   //'current'

  const response = await $.get(`/app-students/${view}`);
     let template = document.createElement('div');
     template.innerHTML = response;
     const script = template.getElementsByTagName("script")[0];
     template = template.querySelector('.task-template');
     const clone = document.importNode(template.content, true);
     if(script)  clone.appendChild(script);


     $(".js-content").html(clone);
}

function activateDefaultSection () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const p = urlParams.get('p');
    if(p !== null){
        document.querySelector(`a[data-section="${p}"]`).click()
    }else{
        document.getElementById('default').click()
    }
}



function handleModalTrigger (event) {
    hideAllModals()
    const modalId = `${event.target.dataset.modal}-modal`
    document.getElementById(modalId).classList.add('is-shown')
}

function hideAllModals () {
    const modals = document.querySelectorAll('.modal.is-shown')
    Array.prototype.forEach.call(modals, (modal) => {
        modal.classList.remove('is-shown')
    })
    showMainContent()
}



function displayAbout () {
    document.querySelector('#about-modal').classList.add('is-shown')
}

// Default to the view that was active the last time the app was open
const sectionId = localStorage.getItem('activeSectionButtonId');
if (sectionId) {
    const section = document.querySelector(`a[data-section="${sectionId}"]`)
    if (section) section.click()
} else {
    activateDefaultSection();
   // displayAbout()
}

